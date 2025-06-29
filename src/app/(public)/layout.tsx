import type { PropsWithChildren } from 'react';
import Header from './(components)/layout/header/header';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<div className='min-h-screen h-full'>{children}</div>
		</>
	);
}
