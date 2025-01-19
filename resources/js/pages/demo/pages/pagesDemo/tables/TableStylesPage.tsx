import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicTable,
	StripedTable,
	SharpTable,
	SharpStripedTable,
	ShadowedTable,
	BorderlessTable,
	ClassicTable,
	DividersTable,
	CompactTable,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

const pageTitle = 'Tables styles'

export const TableStylesPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t(pageTitle)}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Tables are a versatile tool for presenting data in a clear and
					organized manner.
				</p>
				<p className="text-sm mt-2">
					The minimalist design style emphasizes simplicity and efficiency,
					removing unnecessary elements and focusing on clean lines and ample
					white space. This approach not only enhances readability but also
					gives the table a modern and elegant look. The beauty of minimalism
					lies in its ability to make complex information easily digestible,
					allowing the data to speak for itself without distraction. In design,
					less is often more, and this is especially true for tables, where a
					clean and uncluttered layout can significantly improve user
					experience.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'solidButton', label: 'Basic' },
								{ key: 'stripedTable', label: 'Striped' },
								{ key: 'shadowedTable', label: 'Shadowed' },
								{ key: 'sharpTable', label: 'Sharp' },
								{ key: 'sharpStripedTable', label: 'Sharp striped' },
								{ key: 'borderlessTable', label: 'Borderless' },
								{ key: 'classicTable', label: 'Classic' },
								{ key: 'dividersTable', label: 'Dividers' },
								{ key: 'compactTable', label: 'Compact' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-28">
					<BasicTable />
					<StripedTable />
					<SharpTable />
					<SharpStripedTable />
					<ShadowedTable />
					<BorderlessTable />
					<ClassicTable />
					<DividersTable />
					<CompactTable />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}
