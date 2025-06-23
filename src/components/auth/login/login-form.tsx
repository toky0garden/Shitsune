"use client";

import Link from "next/link";
import { Input } from "../Input";
import { LoginData } from "@/types/login.types";
import { useState } from "react";
import { getLogin } from "@/utils/api/request";
import { ValidateInputsForLogin } from "@/generated/validateInputs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Error } from "@/components/Error";

export function LoginForm() {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = ValidateInputsForLogin(formData);

    if (validation.isValid) {
      await getLogin({ params: formData }).catch((err) =>
        toast.error(err.message),
      );
      router.push("/"); //НАДО ЧТОБ ВЕЛО НА ПРОФИЛЬ СТРАНИЦУ
    } else {
      toast.error(validation.error);
      return;
    }
  };

  return (
    <form className="space-y-4">
      <Error />
      <div className="mb-4">
        <div className="mb-1">
          <span className="text-white text-sm font-semibold">
            Имя пользователя или почта
          </span>
        </div>
        <Input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChangeValue}
          placeholder="desp@ayano.mc"
        />
      </div>

      <div className="mb-4">
        <div className="mb-1">
          <span className="text-white text-sm font-semibold">Пароль</span>
        </div>
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChangeValue}
          placeholder="Введите пароль"
        />
      </div>

      <button
        style={{ cursor: "pointer", fontSize: 16 }}
        onClick={handleLoginUser}
        className="w-full bg-white text-black py-0.5 rounded-md hover:bg-stone-300 transition-colors mb-4"
      >
        Продолжить
      </button>

      <p className="text-center text-sm text-stone-400">
        Ещё нет аккаунта?{" "}
        <span className="text-white hover:text-gray-400 transition-colors">
          <Link href="/auth/register">Регистрация</Link>
        </span>
      </p>
    </form>
  );
}
