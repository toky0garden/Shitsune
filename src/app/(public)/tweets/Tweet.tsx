import { TWEETS } from '@/utils/tempApi/tweet.data';
import { TweetCard } from './TweetCard';
import { TweetForm } from './TweetForm';

export function Tweet() {
	return (
		<div>
			<TweetForm />
			<div className='space-y-6'>
				{TWEETS.map((tweet) => (
					<TweetCard key={tweet.username} tweet={{ ...tweet }} />
				))}
			</div>
		</div>
	);
}
