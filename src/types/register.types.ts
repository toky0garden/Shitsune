export interface RegisterData {
	username: string;
	email: string;
	password: string;
}

export interface RegisterResponse {
	access_token: string;
	user: {
		username: string;
		email: string;
		password: string;
	};
	error?: string;
}
