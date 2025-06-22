export interface RegisterData {
  login: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: {
    login: string;
    email: string;
    password: string;
  };
  error?: string;
}
