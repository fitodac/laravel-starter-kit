import { Layout } from '@/layouts/user/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'

const pageTitle = 'Dashboard'

const Page = () => {
	return (
		<>
			<PageHeader title={t(pageTitle)}></PageHeader>
			<PageContent>Dashboard corporate</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: t(pageTitle).toString() }} />
)

export default Page
