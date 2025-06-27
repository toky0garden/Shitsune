import { ValidationResult } from "@/types/validate.interface";

export const validateBanner = (
  file: File | null,
  options?: {
    maxSizeMB?: number;
    allowedTypes?: string[];
    minWidth?: number;
    minHeight?: number;
    aspectRatio?: number; // Например, 16/9 для стандартного баннера
  },
): Promise<ValidationResult> => {
  const defaultOptions = {
    maxSizeMB: 10, // Обычно баннеры могут быть больше аватаров
    allowedTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"], // Добавляем gif для анимированных баннеров
    minWidth: 1200, // Минимальная ширина
    minHeight: 300, // Минимальная высота
    aspectRatio: 16 / 9, // Соотношение сторон 16:9
    ...options,
  };

  if (!file) {
    return Promise.resolve({ isValid: false, error: "Файл не выбран" });
  }

  // Проверка типа файла
  if (!defaultOptions.allowedTypes.includes(file.type)) {
    return Promise.resolve({
      isValid: false,
      error: `Неподдерживаемый формат. Разрешены: ${defaultOptions.allowedTypes.join(", ")}`,
    });
  }

  // Проверка размера файла (в байтах)
  const maxSizeBytes = defaultOptions.maxSizeMB * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    return Promise.resolve({
      isValid: false,
      error: `Файл слишком большой. Макс ${defaultOptions.maxSizeMB}MB`,
    });
  }

  // Проверка размеров изображения и соотношения сторон
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const width = img.width;
      const height = img.height;

      if (
        width < defaultOptions.minWidth ||
        height < defaultOptions.minHeight
      ) {
        resolve({
          isValid: false,
          error: `Минимальный размер баннера: ${defaultOptions.minWidth}x${defaultOptions.minHeight}px`,
        });
        return;
      }

      resolve({ isValid: true });
    };
    img.onerror = () => {
      resolve({
        isValid: false,
        error: "Не удалось прочитать изображение",
      });
    };
    img.src = URL.createObjectURL(file);
  });
};
