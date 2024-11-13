import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'

const pageTitle = String(t('Dashboard'))

const Page = () => {
	return (
		<>
			<PageHeader title={pageTitle}></PageHeader>
			<PageContent>Dashboard corporate</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle }} />
)

export default Page
