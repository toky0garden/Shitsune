"use client";

import { Error } from "@/components/Error";
import { RegisterForm } from "@/components/auth/register/RegisterForm";
import { getErrorMessage } from "@/generated/getErrorMessage";
import { ValidateInputsForRegister } from "@/generated/validateInputs";
import { useShowError } from "@/hooks";
import { RegisterData } from "@/types/register.types";
import { signUp } from "@/utils/api/request/auth/register";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

export function Register() {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });
  const { error, showError, showErrorMsg } = useShowError();
  const router = useRouter();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = ValidateInputsForRegister(formData);

    if (validation.isValid) {
      try {
        await signUp(formData);
        router.push("/");
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
