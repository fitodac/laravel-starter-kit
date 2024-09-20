import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const AccordionPage = () => {
	return (
		<>
			<PageHeader title={t('Accordion')}>
				<p className="font-bold leading-tight">
					Organize Content Efficiently with Interactive Accordions
				</p>
				<p className="text-sm mt-2">
					Accordions are versatile UI components that allow users to expand and
					collapse sections of content. This space-saving feature helps manage
					large amounts of information by showing only the most relevant
					sections at a time. Accordions enhance user experience by providing a
					clear, organized way to navigate through detailed content without
					overwhelming the interface.
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
