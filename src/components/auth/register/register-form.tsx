"use client";

import { Input } from "../Input";
import { RegisterData } from "@/types/register.types";
import { ValidateInputsForRegister } from "@/generated/validateInputs";
import { postRegister } from "@/utils/api/request";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Error } from "@/components/ui/error";
import { ErrorsMsgHandling } from "@/generated/errorsMsgHandling";
import { useRefreshUser } from "@/hooks/useRefreshUser/useRefreshUser";

export function RegisterForm() {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });
  const { refreshUser } = useRefreshUser();

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
      })
        .then(() => router.push(`/user/${formData.username}`))
        .catch((err) => ErrorsMsgHandling(err));
      await refreshUser();
    } else {
      toast.error(validation.error);
      return;
    }
  };

  return (
    <form className="space-y-4">
      <Error />
      <div className="mb-4">
        <Input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChangeValue}
          placeholder="Имя пользователя"
        />
      </div>

      <div className="mb-4">
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChangeValue}
          placeholder="Почта"
        />
      </div>

      <div className="mb-4">
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChangeValue}
          placeholder="Пароль"
        />
      </div>

      <button
        style={{ cursor: "pointer", fontSize: 16 }}
        onClick={handleRegisterUser}
        className="w-full bg-white text-black py-1 rounded-md hover:bg-stone-300 transition-colors mb-4"
      >
        Создать аккаунт
      </button>
    </form>
  );
}
