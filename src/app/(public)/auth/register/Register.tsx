"use client";

import { Error } from "@/components/Error";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { getErrorMessage } from "@/generated/getErrorMessage";
import { ValidateInputsForRegister } from "@/generated/validateInputs";
import { useBoolean } from "@/hooks";
import { RegisterData } from "@/types/register.types";
import { signUp } from "@/utils/api/request/auth/register";
import React from "react";
import { useState } from "react";

export function Register() {
  const [formData, setFormData] = useState<RegisterData>({
    login: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [showError, setShowError] = useBoolean(false);

  //setError в отправке запроса на бэк юзаем в try catch

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showErrorMsg = (message: string) => {
    setError(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 4000);
  };

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = ValidateInputsForRegister(formData);

    if (validation.isValid) {
      try {
        const data = await signUp(formData);
        console.log(data);
      } catch (err) {
        showErrorMsg(getErrorMessage(err));
      }
    } else {
      showErrorMsg(validation.error);
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {showError && <Error message={error} isVisible={showError} />}
      <div className="w-full" style={{ maxWidth: 400 }}>
        <div className="p-8 border border-stone-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-white text-center">
            Регистрация
          </h2>
          <p className="text-stone-400 text-center text-sm mb-6">
            Введите ваше имя пользователя, почту а также пароль
          </p>

          <RegisterForm
            formData={formData}
            handleChangeValue={handleChangeValue}
            handleRegisterUser={handleRegisterUser}
          />
        </div>
      </div>
    </div>
  );
}
