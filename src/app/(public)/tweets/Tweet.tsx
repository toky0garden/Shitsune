import { TweetForm } from '@/shared/components/TweetForm';
import { TWEETS } from '@/shared/testData/tweet.data';
import { TweetCard } from '../../../shared/components/TweetCard';

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
