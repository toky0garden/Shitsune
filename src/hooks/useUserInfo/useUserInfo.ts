'use client';

import { GetUser } from '@/types/user.interface';
import { getUser } from '@/utils/api/request/user';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useBoolean } from '../useBoolean/useBoolean';
import { ParseToken } from '@/generated/parseToken';

export const useUserInfo = () => {
	const token = Cookies.get('auth_token') as string;
	const username = ParseToken(token)?.username;
	const [user, setUser] = useState<GetUser | null>(null);
	const [isLoading, setIsLoading] = useBoolean();
	const [isAuth, setIsAuth] = useBoolean();

	const getUserInfo = async () => {
		setIsLoading(true);
		// @ts-expect-error - Хелппп
		const data = (await getUser({ params: { username: username } })).data;
		setUser(data);
		setIsAuth(true);
		setIsLoading(false);
	};

	useEffect(() => {
		getUserInfo();
	}, [username]);

	return { user, isAuth, isLoading, refretch: getUserInfo };
};
