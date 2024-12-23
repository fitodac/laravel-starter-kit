import { useRef } from 'react'
import { Image, Button, cn } from '@nextui-org/react'
import { t } from '@/i18n'
import { router, usePage } from '@inertiajs/react'
import { toast } from 'react-toastify'

import userBlank from '@/assets/img/blank-462x265.webp'

import type { PageProps, InertiaResponse } from '@/types'

export const FormProfileImage = () => {
	const user = usePage<PageProps>().props.auth.user

	if (!user) return null

	const imgField = useRef<HTMLInputElement>(null)

	const removeImage = () => {
		router.delete(route('profile.remove_image'), {
			// @ts-ignore
			onSuccess: (resp: InertiaResponse) => {
				if (resp.props.flash && resp.props.flash.success) {
					toast.success(t(resp.props.flash.success))
				}
			},
			onError: (errors) => console.log(errors),
		})
	}

	const uploadNewProfilePicture = () => {
		imgField.current && imgField.current.click()
	}

	const updateImage = (file: File) => {
		if (file) {
			router.post(
				route('profile.update_image'),
				{ profile_picture: file },
				{
					forceFormData: true,
					// @ts-ignore
					onSuccess: (resp: InertiaResponse) => {
						if (resp.props.flash && resp.props.flash.success) {
							toast.success(t(resp.props.flash.success))
						}
					},
					onError: (errors) => console.log(errors),
				}
			)
		} else {
			console.error('Attempted to update image with null file')
		}
	}

	return (
		<div
			className={cn(
				'flex flex-col gap-5 relative',
				'lg:flex-row lg:items-center lg:gap-7'
			)}
		>
			<Image
				width={100}
				height={100}
				removeWrapper
				radius="full"
				src={
					user.profile_picture
						? `/storage/img/users/avatars/${user.profile_picture}`
						: userBlank
				}
				classNames={{ img: 'object-cover aspect-square' }}
			/>

			<input
				ref={imgField}
				type="file"
				style={{ height: 0, visibility: 'hidden' }}
				className="absolute"
				onChange={(e) => {
					const target = e.target as HTMLInputElement
					if (target.files) {
						updateImage(target.files[0])
					}
				}}
			/>

			<div className="flex gap-x-5 lg:justify-between">
				<Button
					size="sm"
					color="primary"
					startContent={
						<i className="ri-image-line ri-lg ml-1 -top-px relative" />
					}
					onPress={uploadNewProfilePicture}
				>
					{user.profile_picture ? t('Change picture') : t('Add profile image')}
				</Button>

				{user.profile_picture && (
					<Button
						size="sm"
						color="danger"
						startContent={
							<i className="ri-delete-bin-2-line ri-lg ml-1 -top-px relative" />
						}
						onClick={removeImage}
					>
						{t('Remove picture')}
					</Button>
				)}

				{/* 
				<Chip
					size="sm"
					color="primary"
					avatar={
						<>
							<i className="ri-image-line ri-lg ml-1 -top-px relative" />
						</>
					}
					className={cn(
						'cursor-pointer select-none md:order-2',
						'hover:opacity-90 focus:opacity-50 active:opacity-disabled'
					)}
					onClick={uploadNewProfilePicture}
				>
					{user.profile_picture ? t('Change picture') : t('Add profile image')}
				</Chip>

				<div>
					{user.profile_picture && (
						<Chip
							size="sm"
							color="danger"
							avatar={
								<>
									<i className="ri-delete-bin-2-line ri-lg ml-1 -top-px relative" />
								</>
							}
							className="cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled"
							onClick={removeImage}
						>
							{t('Remove picture')}
						</Chip>
					)}
				</div> 
				*/}
			</div>
		</div>
	)
}
