import { BannerResponse } from "@/types/user.interfaces";
import { api } from "@/utils/api/instance";
import { RikTikDevRequestConfig } from "@/utils/api/type";

export const postBanner = async ({
  params,
  config,
}: RikTikDevRequestConfig) => {
  const response = await api.post<BannerResponse>(
    "/save_user_banner",
    params,
    config,
  );

  return response.data;
};
