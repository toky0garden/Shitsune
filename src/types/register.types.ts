export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: {
    username: string;
    email: string;
    password: string;
  };
  error?: string;
}
