import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const BreadcrumbsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Breadcrumbs')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Enhance Navigation with Intuitive Breadcrumbs
				</p>
				<p className="text-sm mt-2">
					Breadcrumbs are a navigation aid that helps users understand their
					location within a website or application. By displaying a trail of
					links, breadcrumbs allow users to easily backtrack through previous
					pages or sections, improving the overall user experience and making
					site navigation more intuitive and efficient.
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
