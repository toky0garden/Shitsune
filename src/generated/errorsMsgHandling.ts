import { isAxiosError } from "axios";
import { toast } from "react-toastify";

export const ErrorsMsgHandling = (error: unknown) => {
  if (isAxiosError(error)) {
    switch (error.response?.status) {
      case 400:
        toast.error("Неверный логин или пароль");
        break;

      case 401:
        toast.error("Неверный логин или пароль");
        break;
      default:
        const message =
          error.response?.data?.message || error.message || "Произошла ошибка";
        toast.error(message);
    }
  } else {
    const message =
      error instanceof Error ? error.message : "Произошла неизвестная ошибка";
    toast.error(message);
  }
};
