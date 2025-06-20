import '../assets/styles/globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

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
		<html lang='en' className='bg-[var(--background)] text-[var(--foreground)]'>
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
