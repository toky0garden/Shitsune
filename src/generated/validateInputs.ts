import { LoginData } from "@/types/login.types";
import { RegisterData } from "@/types/register.types";
import { ValidationResult } from "@/types/validate.interface";

export function ValidateInputsForRegister(
  formData: RegisterData,
): ValidationResult {
  if (!formData.username || !formData.email || !formData.password) {
    return { isValid: false, error: "Заполните все поля" };
  }

  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    return { isValid: false, error: "Заполните корректный email" };
  }

  if (formData.password.length < 6) {
    return { isValid: false, error: "Пароль должен быть не менее 6 символов" };
  }

  return { isValid: true, error: "" };
}

export function ValidateInputsForLogin(formData: LoginData): ValidationResult {
  if (!formData.username || !formData.password) {
    return { isValid: false, error: "Заполните все поля" };
  }

  if (formData.password.length < 6) {
    return { isValid: false, error: "Пароль должен быть не менее 6 символов" };
  }

  return { isValid: true, error: "" };
}
