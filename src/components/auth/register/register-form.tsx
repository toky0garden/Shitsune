"use client";

import Link from "next/link";
import { Input } from "../Input";
import { RegisterData } from "@/types/register.types";
import { ValidateInputsForRegister } from "@/generated/validateInputs";
import { postRegister } from "@/utils/api/request";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Error } from "@/components/Error";

export function RegisterForm() {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = ValidateInputsForRegister(formData);

    if (validation.isValid) {
      await postRegister({
        params: formData,
      }).catch((err) => toast.error(err));
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
            Имя пользователя
          </span>
        </div>
        <Input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChangeValue}
          placeholder="inadzuma"
        />
      </div>

      <div className="mb-4">
        <div className="mb-1">
          <span className="text-white text-sm font-semibold">Почта</span>
        </div>
        <Input
          name="email"
          type="email"
          value={formData.email}
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
        onClick={handleRegisterUser}
        className="w-full bg-white text-black py-0.5 rounded-md hover:bg-stone-300 transition-colors mb-4"
      >
        Создать аккаунт
      </button>

      <p className="text-center text-sm text-stone-400">
        Есть аккаунт?{" "}
        <span className="text-white hover:text-gray-400 transition-colors">
          <Link href="/auth/login">Войти</Link>
        </span>
      </p>
    </form>
  );
}
