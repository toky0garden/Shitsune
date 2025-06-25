import { FetchesRequestConfig } from '@siberiacancode/fetches';

export type RikTikDevRequestConfig<Params = undefined> =
	Params extends undefined
		? { params?: undefined; config?: FetchesRequestConfig }
		: { params: Params; config?: FetchesRequestConfig };
