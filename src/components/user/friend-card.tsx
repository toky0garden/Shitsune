import { API_URL } from '@/app/(constants)';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { ROUTES } from '@/app/(constants)/routes';

export function FriendCard({ friend }) {
  return (
    <Link href={ROUTES.PROFILE(friend.username)}>
      <div
        className='flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-gray-400/10'
        style={{ cursor: 'pointer' }}
      >
        <Avatar className='h-10 w-10'>
          <AvatarImage
            src={`${API_URL}${friend.avatar_url}`}
            alt={`Аватар ${friend.username}`}
          />
          <AvatarFallback className='bg-gray-600'>
            {friend.username}
          </AvatarFallback>
        </Avatar>
        <div className='flex-1'>
          <p className='font-medium text-white'>{friend.username}</p>
        </div>
      </div>
    </Link>
  );
}
