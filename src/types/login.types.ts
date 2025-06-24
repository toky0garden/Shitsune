export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: {
    username: string;
    password: string;
  };
  error?: string;
}
