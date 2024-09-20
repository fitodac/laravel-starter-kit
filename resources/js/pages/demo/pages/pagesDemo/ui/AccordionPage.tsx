import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const AccordionPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Accordion')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
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
				className={contentClassName}
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
