import { cn, Input, Textarea, Button } from '@nextui-org/react'
import { t } from '@/i18n'

interface Props {}

export const GallerySelection = ({}: Props) => {
	return (
		<aside
			className={cn(
				'bg-content1 border-left-100 border-l w-60 hidden inset-y-0 right-0 absolute',
				'lg:block lg:w-96',
				'dark:border-gray-800'
			)}
		>
			<div className="h-full overflow-auto">
				<div className="text-sm px-6 pt-4 pb-10">
					<div className="font-semibold">{t('Items selected')}</div>
				</div>
			</div>
		</aside>
	)
}
