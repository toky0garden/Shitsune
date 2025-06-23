import Link from "next/link";
import { Input } from "../Input";
import { LoginData } from "@/types/login.types";

export function LoginForm({
  formData,
  handleChangeValue,
  handleLoginUser,
}: {
  formData: LoginData;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginUser: (e: React.FormEvent) => void;
}) {
  return (
    <form className="space-y-4">
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
