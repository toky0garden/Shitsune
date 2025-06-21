import { Info } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	message: string;
	isVisible: boolean;
}

export function Error({ message, isVisible }: Props) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className='fixed bottom-4 right-4'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
				>
					<div className='border border-stone-800 rounded-lg shadow-lg p-3 w-65 relative flex items-center gap-4'>
						<Info className='rounded-full' />
						<p className='text-white text-sm'>{message}</p>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
