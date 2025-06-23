"use client";

import { LoginForm } from "@/components/auth/login/LoginForm";
import { Error } from "@/components/Error";
import { getErrorMessage } from "@/generated/getErrorMessage";
import { ValidateInputsForLogin } from "@/generated/validateInputs";
import { useShowError } from "@/hooks";
import { LoginData } from "@/types/login.types";
import { signIn } from "@/utils/api/request/auth/login";
import { useState } from "react";

export function Login() {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const { error, showError, showErrorMsg } = useShowError();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = ValidateInputsForLogin(formData);

    if (validation.isValid) {
      try {
        const data = await signIn(formData);
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
            Вход в аккаунт
          </h2>
          <p className="text-stone-400 text-center text-sm mb-6">
            Введите имя пользователя или почту а также пароль
          </p>

          <LoginForm
            formData={formData}
            handleChangeValue={handleChangeValue}
            handleLoginUser={handleLoginUser}
          />
        </div>
      </div>
    </div>
  );
}
