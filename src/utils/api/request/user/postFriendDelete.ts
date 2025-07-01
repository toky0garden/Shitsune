import { AvatarResponse } from '@/types/user.interfaces';
import { api } from '@/utils/api/instance';
import { RikTikDevRequestConfig } from '@/utils/api/type';

export const postFriendDelete = async ({
  params,
  config,
}: RikTikDevRequestConfig) => {
  const response = await api.post<AvatarResponse>(
    '/remove_friends',
    params,
    config,
  );

  return response.data;
};
