import { cn, Input, Button } from '@nextui-org/react'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import { t } from '@/i18n'
import { toast } from 'react-toastify'
import { useMediaManager } from '../hooks/useMediaManager'

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

export const Sidebar = () => {
	const { fileSelected } = useMediaMangerStore()
	const { deleteFile, formatSize } = useMediaManager()

	const content = () => {
		if (!fileSelected) return null

		const { name, file_name, original_url, size, uuid } = fileSelected

		return (
			<div className="h-full overflow-auto">
				<div className="text-sm px-6 py-4 pb-24 h-full">
					<div className="font-semibold">{t('Attachment details')}</div>

					<div className="mt-3 space-y-5">
						<div className="space-y-2">
							<div className="font-semibold">{file_name}</div>
							<div className="">
								{t('Size')}: {formatSize(size)}
							</div>
						</div>

						<Input value={name} label={t('Name')} isReadOnly />

						<Input
							value={original_url}
							label={t('File URL')}
							isReadOnly
							endContent={
								<Button isIconOnly onPress={() => handleCopy(original_url)}>
									<i className="ri-file-copy-line"></i>
								</Button>
							}
						/>

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
							onPress={() => deleteFile(uuid)}
						>
							{t('Delete permanently')}
						</Button>
					</div>

					<pre className="text-xs">{JSON.stringify(fileSelected, null, 2)}</pre>
				</div>
			</div>
		)
	}

	return (
		<aside
			className={cn(
				'bg-content1 border-left-100 border-l w-60 hidden inset-y-0 right-0 absolute',
				'md:block lg:w-72 xl:w-96',
				'dark:border-gray-800'
			)}
		>
			{content()}
		</aside>
	)
}
