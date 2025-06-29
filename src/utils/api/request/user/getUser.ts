import { GetUser } from '@/types/user.interfaces';
import { api } from '../../instance';
import { RikTikDevRequestConfig } from '../../type';

export const getUser = async ({ params, config }: RikTikDevRequestConfig) => {
	return api.get<GetUser>('/user', {
		...config,
		params,
	});
};
