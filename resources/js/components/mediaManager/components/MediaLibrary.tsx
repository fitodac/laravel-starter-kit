import { useEffect, useState, useMemo } from 'react'
import { Sidebar } from './Sidebar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { t } from '@/i18n'
import { useMediaManager } from '../hooks'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import { Card, CardFooter, CircularProgress, Image } from '@nextui-org/react'

// const getFiles = async () => {
// 	const { data, status } = await axios.get(route('media.list'))
// 	if (200 !== status) toast.error(t('Error fetching files'))
// 	return data
// }

export const MediaLibrary = () => {
	const { getFiles, formatSize } = useMediaManager()
	const { files } = useMediaMangerStore()

	useEffect(() => {
		getFiles()
	}, [])

	useEffect(() => {
		console.log(files)
	}, [files])

	return (
		<section className="w-full relative">
			<div className="h-full px-6 py-4 overflow-auto md:pr-8 md:mr-60 lg:mr-72 xl:mr-96">
				{!files ? (
					<div className="bg-black w-full h-full grid place-content-center">
						<CircularProgress label={t('Loading files')} />
					</div>
				) : (
					<div className="grid grid-cols-2 gap-7 pb-24 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
						{files.map(({ uuid, preview_url, name, size }) => (
							<Card
								key={uuid}
								classNames={{
									base: 'aspect-square',
									footer:
										'whitespace-nowrap flex-col items-end p-2 absolute bottom-0 inset-x-0 z-10',
								}}
								isFooterBlurred
								isPressable
							>
								<Image
									src={preview_url}
									alt={name}
									className="w-full h-full object-cover"
									removeWrapper
								/>
								<CardFooter>
									<div className="text-sm truncate">{name}</div>
									<div className="text-xs truncate">{formatSize(size)}</div>
								</CardFooter>
							</Card>
							// <div key={uuid}>{preview_url}</div>
						))}
					</div>
				)}

				<Sidebar />
			</div>
		</section>
	)
}
