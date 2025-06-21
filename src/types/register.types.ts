export interface RegisterData {
	login: string;
	email: string;
	password: string;
}

export interface RegisterResponse {
	access_token: string;
	user: {
		login: string;
		email: string;
		password: string;
	};
	error?: string;
}
