import { Button } from '@nextui-org/react'
import { useMediaMangerStore } from '../store/mediaManagerStore'
import { t } from '@/i18n'

interface Props {}

export const Navbar = ({}: Props) => {
	const { onClose, filesTotal } = useMediaMangerStore()

	return (
		<div className="bg-white border-t border-gray-100 w-full rounded-b-2xl z-30 dark:bg-gray-900 dark:border-gray-800">
			<div className="px-8 py-4 flex justify-between items-end gap-x-5">
				<div className="text-foreground-600 text-sm">
					{t('Total files')}: {filesTotal}
				</div>

				<Button
					variant="ghost"
					startContent={
						<svg viewBox="0 0 24 24" className="h-5 fill-white">
							<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
						</svg>
					}
					onPress={onClose}
				>
					Cancel
				</Button>
			</div>
		</div>
	)
}
