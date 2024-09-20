import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { PaginationPage } from '@/pages/demo/pages/pagesDemo/ui/PaginationPage'

export const Page = () => <PaginationPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Pagination')) }} />
)

export default Page
