import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { LineAreaCharts, BarCharts } from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const ApexChartsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Apex Charts')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Elegant and interactive charts that elevate data visualization.
				</p>
				<p className="text-sm mt-2">
					Each chart is dynamic and customizable, providing clear insights and
					enhanced interactivity. These charts strike the perfect balance
					between form and function, delivering a smooth and informative
					experience.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'lineArea', label: 'Line Area' },
								{ key: 'barchart', label: 'Bar Chart' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-3xl space-y-28">
					<LineAreaCharts />
					<BarCharts />
				</div>
			</PageContent>
		</>
	)
}
