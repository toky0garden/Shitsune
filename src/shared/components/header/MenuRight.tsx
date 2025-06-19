import { User } from 'lucide-react';
import Link from 'next/link';

export function MenuRight() {
	return (
		<div className='flex items-center space-x-4'>
			<Link href='/auth/login'>
				<User className='h-5 w-5 text-gray-400 cursor-pointer hover:text-white' />
			</Link>
		</div>
	);
}
