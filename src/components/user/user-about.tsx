import { GetUser } from '@/types/user.interfaces';
import { Typography } from '../ui/typography';

export function AboutUser({ user }: GetUser) {
  return (
    <div className='mt-2 flex flex-col gap-2 px-4 pb-4 pt-2 md:px-6'>
      <Typography h4 as='h3'>
        О себе
      </Typography>
      {user.about_me ? (
        <p className='text-sm opacity-80'>{user.about_me}</p>
      ) : (
        <p className='text-sm opacity-80'>Информация отсутствует</p>
      )}
    </div>
  );
}
