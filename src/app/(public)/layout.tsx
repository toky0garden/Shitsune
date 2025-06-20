import type { PropsWithChildren } from 'react';
import Header from '../../components/header/Header';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className='min-h-screen'>
			<Header />
			<div className='flex justify-center px-4 py-8 w-full max-w-xl mx-auto'>{children}</div>
		</div>
	);
}
