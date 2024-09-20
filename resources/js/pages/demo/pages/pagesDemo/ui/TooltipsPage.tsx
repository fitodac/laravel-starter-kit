import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const TooltipsPage = () => {
	return (
		<>
			<PageHeader title={t('Tooltips')}>
				<p className="font-bold leading-tight">
					Enhance Usability with Informative Tooltips
				</p>
				<p className="text-sm mt-2">
					Tooltips are small, contextual pop-ups that provide additional
					information when users hover over or focus on an element. They offer a
					concise way to deliver hints, descriptions, or tips without cluttering
					the interface. Tooltips improve user experience by offering instant,
					relevant information, making interactions more intuitive and
					efficient.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ButtonsNavbar
						{...{
							menu: [
								// { key: 'solidButton', label: 'Solid button' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-14"></div>
			</PageContent>
		</>
	)
}
