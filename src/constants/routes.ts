export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  TWEETS: "/tweets",
  CHAT: "/chat",
  FAQ: "/faq",
  PROFILE: (username: string) => `/user/${username}`,
} as const;
