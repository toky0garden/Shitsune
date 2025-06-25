interface defineRole {
	message: string;
}

export const DefineRole = (role: number): defineRole => {
	switch (role) {
		case 0:
			return { message: 'Пользователь' };
		case 1:
			return { message: 'Администратор' };
		case 2:
			return { message: 'Создатель' };
		default:
			return { message: '{-_-}' };
	}
};
