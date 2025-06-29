'use client';

import { AvatarUpload } from './avatar-upload';
import { BannerUpload } from './banner-upload';
import { ChangeAboutUser } from './change-about_user';
import { ChangeDisplayName } from './change-display_name';

export function AppearanceForm() {
	return (
		<div className='flex flex-col items-center gap-8 justify-center'>
			{/* CHANGE PROFILE NAME */}
			<ChangeDisplayName />

			{/* CHANGE ABOUT */}
			<ChangeAboutUser />

			{/* CHANGE AVATAR */}
			<AvatarUpload />

			{/* CHANGE BANNER */}
			<BannerUpload />
		</div>
	);
}
