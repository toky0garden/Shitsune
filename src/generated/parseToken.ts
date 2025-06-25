interface JwtPayload {
	username: string;
	email: string;
	exp: number;
}

export const ParseToken = (
	token: string | undefined | null,
): JwtPayload | null => {
	if (!token) return null;

	const payloadBase64 = token.split('.')[1];
	const payloadJson = atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/'));
	const final = JSON.parse(payloadJson);
	return final;
};
