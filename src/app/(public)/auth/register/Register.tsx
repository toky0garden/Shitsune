"use client";

import { RegisterForm } from "@/components/auth/register/register-form";

export function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full" style={{ maxWidth: 400 }}>
        <div className="p-8 border border-stone-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-white text-center">
            Регистрация
          </h2>
          <p className="text-stone-400 text-center text-sm mb-6">
            Введите ваше имя пользователя, почту а также пароль
          </p>

          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
