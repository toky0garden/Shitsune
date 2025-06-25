import Cookies from 'js-cookie';

export const logout = async () => {
	Cookies.remove('auth_token');
	window.location.href = '/';
};
