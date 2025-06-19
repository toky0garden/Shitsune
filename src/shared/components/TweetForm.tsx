export function TweetForm() {
	return (
		<form
			className='w-full border border-white/10 rounded-xl p-4 text-white space-y-3 mb-5'
			style={{ minWidth: 600 }}
		>
			<input
				type='text'
				placeholder='Что нового?'
				className='w-full bg-transparent outline-none text-m placeholder-gray-500'
			/>
			<div className='flex justify-end'>
				<button className='bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:bg-gray-200 transition'>
					Опубликовать
				</button>
			</div>
		</form>
	);
}
