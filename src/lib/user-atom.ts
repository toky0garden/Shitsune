import { ParseToken } from '@/generated/parseToken';
import { GetUser } from '@/types/user.interfaces';
import { getUser } from '@/utils/api/request/user/getUser';
import { atom } from 'jotai';
import Cookies from 'js-cookie';

// Базовые атомы
export const userAtom = atom<GetUser | null>(null);
export const userLoadingAtom = atom<boolean>(true);
export const userAuth = atom<boolean>(false);
export const currentUser = atom<string>('');
export const lastAuthCheckAtom = atom<number>(0);

// Производный атом для инициализации пользователя
export const initializeUserAtom = atom(
	(get) => get(userAtom),
	async (get, set, forceRefresh = false) => {
		if (!forceRefresh && get(userAtom) !== null) return;

		const token = Cookies.get('auth_token');
		const parsedToken = ParseToken(token);

		if (token) {
			const user = (
				await getUser({ params: { username: parsedToken?.username } })
			).data;
			set(userAtom, user);
			set(userAuth, true);
			set(currentUser, parsedToken?.username as string);
		}
		set(userLoadingAtom, false);
	},
);
