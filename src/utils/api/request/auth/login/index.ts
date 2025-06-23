import { LoginData, LoginResponse } from "@/types/login.types";
import { api } from "@/utils/api/instance";
import { RikTikDevRequestConfig } from "@/utils/api/type";
import Cookies from "js-cookie";

export const getLogin = async ({
  params,
  config,
}: RikTikDevRequestConfig<LoginData>) => {
  console.log("Sending login request with:", params);
  const response = await api.post<LoginResponse>("/login", params, config);
  console.log("Received response:", response);

  if (response.data.token) {
    Cookies.set("auth_token", response.data.token, { expires: 7 });
  }

  if (response.status === 401 || response.status === 400) {
    throw new Error("Неверный логин или пароль");
  }

  return response.data;
};
