import Header from '@/components/header/header';
import type { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<div className='min-h-screen h-full'>{children}</div>
		</>
	);
}
