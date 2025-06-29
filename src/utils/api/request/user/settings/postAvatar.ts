import { AvatarResponse } from "@/types/user.interfaces";
import { api } from "@/utils/api/instance";
import { RikTikDevRequestConfig } from "@/utils/api/type";

export const postAvatar = async ({
  params,
  config,
}: RikTikDevRequestConfig) => {
  const response = await api.post<AvatarResponse>(
    "/save_user_avatar",
    params,
    config,
  );

  return response.data;
};
