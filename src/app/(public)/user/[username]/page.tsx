import { getUser } from '@/utils/api/request/user';
import { Metadata } from 'next';
import { UserPage } from './UserPage';
import notFound from '@/app/not-found';

export async function generateMetadata({
	params,
}: {
	params: { username: string };
}): Promise<Metadata> {
	const username = (await params).username;
	const user = await getUser({ params: { username } }).catch(() => notFound());

	return {
		title: user.data.username,
		alternates: {
			canonical: `/user/${username}`,
		},
	};
}

export default function Page() {
	return <UserPage />;
}
