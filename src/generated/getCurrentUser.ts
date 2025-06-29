import Cookies from 'js-cookie';
import { ParseToken } from './parseToken';
export function getCurrentUserFromToken() {
	const token = Cookies.get('auth-token');

	if (!token) return null;

	return ParseToken(token);
}
