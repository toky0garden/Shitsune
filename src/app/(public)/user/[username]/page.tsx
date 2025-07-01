import { Metadata } from 'next';
import notFound from '@/app/not-found';
import { getUser } from '@/utils/api/request/user/getUser';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FriendCard } from '@/components/user/friend-card';
import { AddFriend } from '@/components/user/add-friend';
import { UserBanner } from '@/components/user/user-banner';
import { UserAvatar } from '@/components/user/user-avatar';
import { AboutUser } from '@/components/user/user-about';
import { DeleteFriend } from '@/components/user/delete-friend';
import { EditProfile } from '@/components/user/edit-profile';

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const username = (await params).username;

  return {
    title: username,
    alternates: {
      canonical: `/user/${username}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const username = (await params).username;
  const user = await getUser({ params: { username } }).catch(() => notFound());

  if (!user?.data || username !== user.data.username) {
    return notFound();
  }

  return (
    <div className='w-full'>
      <div className='mx-auto box-border block min-h-full w-full'>
        <UserBanner user={user?.data} />

        <div className='flex items-center justify-between'>
          <div>
            <UserAvatar user={user?.data} />

            <div className='flex items-center mt-3 gap-2'>
              <AddFriend user={user?.data} />
              <DeleteFriend user={user?.data} />
            </div>

            <AboutUser user={user?.data} />
          </div>
          <EditProfile user={user?.data} />
        </div>

        <Card className='w-full max-w-md border-none'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-white'>
              <span className='text-2xl font-normal'>Друзья</span>
              {user?.data.friends && (
                <Badge className='text-sm'>{user?.data.friends.length}</Badge>
              )}
            </CardTitle>
          </CardHeader>
          {user?.data.friends.length > 0 && (
            <CardContent className='space-y-4'>
              {user.data.friends.map((friend) => (
                <FriendCard key={friend.username} friend={friend} />
              ))}
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
