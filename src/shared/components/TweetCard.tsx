import { ITweet } from '@/shared/types/tweet.type';

interface Props {
	tweet: ITweet;
}

export function TweetCard({ tweet }: Props) {
	return (
		<div className='border border-white/10 rounded-xl p-4 text-white shadow-md'>
			<div className='flex items-center gap-3 mb-2'>@{tweet.username}</div>
			<p className='text-white/90'>{tweet.text}</p>
		</div>
	);
}
