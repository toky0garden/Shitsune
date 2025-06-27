import { ValidationResult } from "@/types/validate.interface";

export const validateAvatar = (
  file: File | null,
  options?: {
    maxSizeMB?: number;
    allowedTypes?: string[];
  },
): ValidationResult => {
  const defaultOptions = {
    maxSizeMB: 5,
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
    ...options,
  };

  if (!file) {
    return { isValid: false, error: "Файл не выбран" };
  }

  // Проверка типа файла
  if (!defaultOptions.allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `Неподдерживаемый формат`,
    };
  }

  // Проверка размера файла (в байтах)
  const maxSizeBytes = defaultOptions.maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return {
      isValid: false,
      error: `Файл слишком большой. Макс ${defaultOptions.maxSizeMB}MB`,
    };
  }

  return { isValid: true };
};
