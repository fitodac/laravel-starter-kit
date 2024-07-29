import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicTable,
	BorderedTable,
	DividersTable,
	StripedTable,
	BorderlessTable,
	CardTable,
	CardTable2,
} from '@/pages/demo/componentsDemo'
import type { ProductsProps } from '@/pages/demo/types'
import type { PageProps } from '@/types'
import { Divider } from '@nextui-org/react'
import { usePage } from '@inertiajs/react'

interface Props extends PageProps {
	products: ProductsProps
}

export const Page = ({ products }: Props) => {
	const { url } = usePage()

	return (
		<>
			<PageHeader title={t('Tables')}></PageHeader>

			<PageContent>
				<BasicTable {...{ data: products }} />

				{url === '/dashboard/corporate/tables' && (
					<BasicTable {...{ data: products }} />
				)}

				{url === '/dashboard/corporate/tables/striped' && (
					<StripedTable {...{ data: products }} />
				)}

				{url === '/dashboard/corporate/tables/borderless' && (
					<BorderlessTable {...{ data: products }} />
				)}

				{url === '/dashboard/corporate/tables/dividers' && (
					<DividersTable {...{ data: products }} />
				)}

				{url === '/dashboard/corporate/tables/bordered' && (
					<BorderedTable {...{ data: products }} />
				)}

				{url === '/dashboard/corporate/tables/card' && (
					<CardTable {...{ data: products }} />
				)}

				{url === '/dashboard/corporate/tables/card2' && (
					<CardTable2 {...{ data: products }} />
				)}

				<div className="h-20" />
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: t('Tables') }} />
)

export default Page
