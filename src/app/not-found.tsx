import Link from 'next/link';

export default function notFound() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
			<h1 className='text-7xl font-bold mb-4'>404</h1>
			<Link
				href='/'
				className='text-m font-semibold gap-2 px-4 py-1 rounded-lg bg-stone-700 hover:bg-stone-900 transition-colors'
			>
				Вернуться
			</Link>
		</div>
	);
}
