import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Link } from '@inertiajs/react'

interface Props {}

const Page = ({}: Props) => {
	return (
		<>
			<PageHeader title={t('Dashboard')}></PageHeader>
			<PageContent>Dashboard executive</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Dashboard')) }} />
)

export default Page
