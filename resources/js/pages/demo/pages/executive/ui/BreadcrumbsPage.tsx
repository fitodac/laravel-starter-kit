import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { BreadcrumbsPage } from '@/pages/demo/pages/pagesDemo/ui/BreadcrumbsPage'

export const Page = () => <BreadcrumbsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Breadcrumbs')) }} />
)

export default Page
