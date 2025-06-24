import { LoginData, LoginResponse } from "@/types/login.types";
import { api } from "@/utils/api/instance";
import { RikTikDevRequestConfig } from "@/utils/api/type";
import Cookies from "js-cookie";

export const getLogin = async ({
  params,
  config,
}: RikTikDevRequestConfig<LoginData>) => {
  const response = await api.post<LoginResponse>("/login", params, config);

  if (response.data.access_token) {
    Cookies.set("auth_token", response.data.access_token, { expires: 7 });
  }

  return response.data;
};
