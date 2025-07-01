import { SearchUser } from '@/types/user.interfaces';
import { api } from '../../instance';
import { RikTikDevRequestConfig } from '../../type';

export const getAllUsers = async ({ params, config }: RikTikDevRequestConfig) => {
  return api.get<SearchUser>('/all_users', {
    ...config,
    params,
  });
};
