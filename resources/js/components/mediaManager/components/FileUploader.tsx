import { type ReactNode, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button, cn } from '@nextui-org/react'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import { t } from '@/i18n'
// import { useForm } from '@inertiajs/react'
import { router } from '@inertiajs/react'

const defaultAcceptedFormats = {
	'image/jpeg': ['.jpeg', '.jpg'],
	'image/png': ['.png'],
	'image/webp': ['.webp'],
	'image/svg+xml': ['.svg'],
	'image/avif': ['.avif'],
}

const tabsGroup = ['mediaLibrary', 'uploadFiles']

export const FileUploader = () => {
	const { setOnClose, tabsEnabled, setTabsEnabled } = useMediaMangerStore()

	const upload = (files: any) => {
		console.log('upload', files)
		console.log('ruta', route('media.upload'))
		router.post(
			route('media.upload'),
			{ files: files },
			{
				forceFormData: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {},
				onError: (errors) => console.log(errors),
			}
			// {
			//
			// 	// @ts-ignore
			// 	onSuccess: (resp: InertiaResponse) => {
			// 		if (resp.props.flash && resp.props.flash.success) {
			// 			toast.success(resp.props.flash.success)
			// 		}
			// 	},
			//
			// }
		)
	}

	const { open, getRootProps, getInputProps } = useDropzone({
		accept: defaultAcceptedFormats,
		onDrop: (acceptedFiles) => {
			// console.log('acceptedFiles', acceptedFiles)
			// const file = acceptedFiles[0]
			// const previewUrl = URL.createObjectURL(file)
			// return () => URL.revokeObjectURL(previewUrl)
		},
		onDropAccepted: (files) => {
			// setTabsEnabled && setTabsEnabled([])
			console.log('onDropAccepted', files)
			upload(files)
			// setTabsEnabled && setTabsEnabled([...tabsGroup])
		},
		onDropRejected: (err) => {
			console.log('error', err)
		},
	})

	return (
		<div
			{...getRootProps({
				className:
					'dropzone w-full grid place-content-center cursor-pointer select-none',
			})}
		>
			<input {...getInputProps()} type="hidden" />

			<div className="space-y-2 text-center">
				<p className="font-semibold">{t('Drop files to upload')}</p>
				<p className="text-foreground-500 text-xs">or</p>
				<Button
					color="primary"
					variant="faded"
					className="px-10"
					onPress={open}
				>
					Select files
				</Button>
				<p className="text-foreground-500 text-xs font-medium pt-5">
					{t('Maximum upload file size')} 300 MB
				</p>
			</div>
		</div>
	)
}
