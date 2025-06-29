export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  TWEETS: "/tweets",
  CHAT: "/chat",
  FAQ: "/faq",
  PROFILE: (username: string) => `/user/${username}`,
  SETTINGS: (username: string) => `/user/${username}/settings`,
} as const;
