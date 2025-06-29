import { AvatarResponse } from '@/types/user.interfaces';
import { api } from '@/utils/api/instance';
import { RikTikDevRequestConfig } from '@/utils/api/type';

export const postFriendAdd = async ({
	params,
	config,
}: RikTikDevRequestConfig) => {
	console.log(params);
	const response = await api.put<AvatarResponse>(
		'/add_friends',
		params,
		config,
	);

	console.log(response);
	console.log(response.data);

	return response.data;
};
