import { DisplayNameResponse } from '@/types/user.interfaces';
import { api } from '@/utils/api/instance';
import { RikTikDevRequestConfig } from '@/utils/api/type';

export const postAboutMe = async ({
	params,
	config,
}: RikTikDevRequestConfig) => {
	const response = await api.put<DisplayNameResponse>('/update/user', params, {
		...config,
		headers: {
			'Content-Type': 'application/json',
			...config?.config?.headers,
		},
	});

	return response.data;
};
