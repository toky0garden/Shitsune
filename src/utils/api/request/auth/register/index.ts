import { RegisterData, RegisterResponse } from "@/types/register.types";
import { api } from "@/utils/api/instance";
import { RikTikDevRequestConfig } from "@/utils/api/type";
import Cookies from "js-cookie";

export const postRegister = async ({
  params,
  config,
}: RikTikDevRequestConfig<RegisterData>) => {
  const response = await api.post<RegisterResponse>(
    "/register",
    params,
    config,
  );

  if (response.data?.error) {
    throw new Error(response.data.error);
  }

  if (response.data.token) {
    Cookies.set("auth_token", response.data.token, { expires: 7 });
  }
  return response.data;
};
