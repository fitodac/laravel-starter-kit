import { useEffect } from 'react'
import { Sidebar, GallerySelection } from '.'
import { t } from '@/i18n'
import { useMediaManager } from '../hooks'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import {
	cn,
	Card,
	CardFooter,
	CircularProgress,
	Image,
} from '@nextui-org/react'

import type { Image as ImageProps } from '../types.d'

export const MediaLibrary = () => {
	const { getFiles, formatSize } = useMediaManager()
	const { files, setFileSelected, fileSelected, selectMultiple, collection } =
		useMediaMangerStore()

	useEffect(() => {
		console.log('collection', collection)
		getFiles()
	}, [])

	return (
		<section className="w-full relative">
			<div className="inset-y-0 left-0 absolute lg:right-96">
				{!files ? (
					<div className="w-full h-full grid place-content-center">
						<CircularProgress label={t('Loading files')} />
					</div>
				) : (
					<div className="scrollbar-thin h-full overflow-y-scroll">
						<div
							className={cn(
								'grid grid-cols-2 gap-7 px-6 pt-4 pb-24',
								'sm:grid-cols-3 xl:grid-cols-5'
							)}
						>
							{files.map((file: ImageProps) => (
								<Card
									key={file.uuid}
									radius="md"
									classNames={{
										base: cn(
											'aspect-square',
											fileSelected &&
												fileSelected.uuid === file.uuid &&
												'outline-offset-4 outline-2 outline-primary'
										),
										footer:
											'bg-black/30 whitespace-nowrap flex-col items-end p-2 absolute bottom-0 inset-x-0 rounded-none z-10',
									}}
									isFooterBlurred
									isPressable
									onPress={() => {
										if (setFileSelected) {
											if (fileSelected && file.id === fileSelected.id) {
												setFileSelected(null)
											} else {
												setFileSelected(file)
											}
										}
									}}
								>
									{fileSelected && fileSelected.uuid === file.uuid && (
										<i className="ri-checkbox-circle-fill ri-2x text-primary right-0 -top-2 absolute pointer-events-none z-20"></i>
									)}
									<Image
										src={file.preview_url}
										alt={file.name}
										className={cn('w-full h-full object-cover')}
										radius="md"
										removeWrapper
									/>
									<CardFooter>
										<div className="text-sm truncate">{file.name}</div>
										<div className="text-xs truncate">
											{formatSize(file.size)}
										</div>
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				)}
			</div>

			{/* {JSON.stringify(selectMultiple)} */}
			{selectMultiple ? <GallerySelection /> : <Sidebar />}
		</section>
	)
}
