export interface GetUser {
  id: number;
  username: string;
  email: string;
  avatar_url: string;
  banner_url: string;
  about_me: string;
  role: number;
  display_name: string;
  friends: {
    username: string;
    avatar_url: string;
  };
}

export interface BannerResponse {
  username: string;
  banner: File | null;
  error?: string;
}

export interface AvatarResponse {
  username: string;
  avatar: File | null;
  error?: string;
}

export interface DisplayNameResponse {
  username: string | null;
  display_name: string;
  error?: string;
}
