import '../assets/styles/globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
	title: 'Ytweet',
	description: 'by Ytweet'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={GeistSans.variable}>
			<body className='bg-[var(--background)] text-[var(--foreground)] antialiased'>
				{children}
			</body>
		</html>
	);
}
