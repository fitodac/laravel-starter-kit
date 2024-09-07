import { cn, Input, Textarea, Button } from '@nextui-org/react'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import { t } from '@/i18n'
import { toast } from 'react-toastify'
import { useMediaManager } from '../hooks/useMediaManager'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/react'
import type { Image } from '../types.d'

const handleCopy = (url: string) => {
	if (navigator.clipboard) {
		navigator.clipboard
			.writeText(url)
			.then(() => {
				toast.success(t('Text copied to clipboard'))
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err)
			})
	} else {
		toast.error(t('Clipboard API not supported'))
	}
}

const inputStyle = {
	base: 'gap-2 items-start',
	label: 'w-20',
	mainWrapper: 'flex-1',
}

export const Sidebar = () => {
	const { fileSelected } = useMediaMangerStore()
	const { updateFile, deleteFile, formatSize } = useMediaManager()
	const [editable, setEditable] = useState(false)
	const { data, setData } = useForm({ ...fileSelected })

	useEffect(() => {
		setEditable(false)
		setData({ ...fileSelected })
	}, [fileSelected])

	const content = () => {
		if (!fileSelected) return null

		const {
			name,
			file_name,
			original_url,
			size,
			created_at,
			id,
			uuid,
			custom_properties,
		} = fileSelected

		return (
			<div className="h-full overflow-auto">
				<div className="text-sm px-6 py-4 pb-24 h-full">
					<div className="font-semibold">{t('Attachment details')}</div>

					<div className="mt-2 space-y-5">
						<div className="space-y-0.5">
							<div className="font-semibold">{file_name}</div>
							<div className="flex justify-between gap-4">
								<span>{t('Size')}:</span>
								<span>{formatSize(size)}</span>
							</div>

							<div className="flex justify-between gap-4">
								<span>{t('Date')}:</span>
								<span>{dayjs(created_at).format('MMM DD, YYYY')}</span>
							</div>

							<div className="flex justify-between gap-4">
								<span>{t('uuid')}:</span>
								<span className="truncate">{uuid}</span>
							</div>
						</div>

						{!editable && (
							<div className="flex justify-end">
								<Button
									color="primary"
									size="sm"
									variant="faded"
									className="px-10"
									onPress={() => setEditable(true)}
								>
									{t('Edit')}
								</Button>
							</div>
						)}

						{data && (
							<div className="space-y-3">
								<Input
									size="sm"
									value={data.name}
									label={t('Name')}
									labelPlacement="outside-left"
									classNames={inputStyle}
									isReadOnly={!editable}
									onValueChange={(val) => setData('name', val)}
								/>

								{data.custom_properties && (
									<>
										<Textarea
											size="sm"
											value={data.custom_properties.altText ?? ''}
											label={t('Alt text')}
											labelPlacement="outside-left"
											classNames={inputStyle}
											isReadOnly={!editable}
											onValueChange={(val) =>
												setData('custom_properties', {
													...data.custom_properties,
													altText: val,
												})
											}
										/>

										<Textarea
											size="sm"
											value={data.custom_properties.caption}
											label={t('Caption')}
											labelPlacement="outside-left"
											classNames={inputStyle}
											isReadOnly={!editable}
											onValueChange={(val) =>
												setData('custom_properties', {
													...data.custom_properties,
													caption: val,
												})
											}
										/>
										<Textarea
											size="sm"
											value={data.custom_properties.description}
											label={t('Description')}
											labelPlacement="outside-left"
											classNames={inputStyle}
											isReadOnly={!editable}
											onValueChange={(val) =>
												setData('custom_properties', {
													...data.custom_properties,
													description: val,
												})
											}
										/>
									</>
								)}

								{editable && (
									<div className="pt-1 pb-3 flex gap-3">
										<Button
											variant="faded"
											className="flex-1"
											onPress={() => setEditable(false)}
										>
											{t('Cancel')}
										</Button>

										<Button
											color="primary"
											className="flex-1"
											onPress={() => {
												updateFile(data)
												setEditable(false)
											}}
										>
											{t('Save')}
										</Button>
									</div>
								)}

								<div className="flex gap-3">
									<Input
										isReadOnly
										value={original_url}
										label={t('File URL')}
										size="sm"
										labelPlacement="outside-left"
										classNames={inputStyle}
									/>

									<Button
										isIconOnly
										size="sm"
										radius="lg"
										onPress={() => handleCopy(original_url)}
									>
										<i className="ri-file-copy-line"></i>
									</Button>
								</div>
							</div>
						)}

						<div className="flex justify-end">
							<a href={original_url} target="_blank">
								<Button color="primary" variant="light" size="sm">
									{t('Open image in new tab')}
								</Button>
							</a>
						</div>
					</div>

					<div className="mt-8 flex justify-end">
						<Button
							color="danger"
							size="sm"
							variant="light"
							onPress={() => deleteFile(id)}
						>
							{t('Delete permanently')}
						</Button>
					</div>

					{/* <pre className="text-xs">{JSON.stringify(fileSelected, null, 2)}</pre> */}
					{/* <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre> */}
				</div>
			</div>
		)
	}

	return (
		<aside
			className={cn(
				'bg-content1 border-left-100 border-l w-60 hidden inset-y-0 right-0 absolute',
				'lg:block lg:w-96',
				'dark:border-gray-800'
			)}
		>
			{content()}
		</aside>
	)
}
