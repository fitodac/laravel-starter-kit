import { Layout } from '@/layouts/admin/corporate/Layout'
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

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Tables styles')}>
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

			<PageContent>
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
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

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Tables styles')) }} />
)

export default Page
