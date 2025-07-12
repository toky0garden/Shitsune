import { AvatarResponse } from '@/types/user.interfaces';
import { api } from '@/utils/api/instance';
import { RikTikDevRequestConfig } from '@/utils/api/type';

export const postFriendAdd = async ({
  params,
  config,
}: RikTikDevRequestConfig) => {
  const response = await api.put<AvatarResponse>(
    '/add_friends',
    params,
    config,
  );

  return response.data;
};
