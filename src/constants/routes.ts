export const ROUTES = {
	HOME: '/',
	AUTH: '/auth/',
	TWEETS: '/tweets',
	CHAT: '/chat',
	FAQ: '/faq',
	PROFILE: (username: string) => `/profile/${username}`
} as const;
