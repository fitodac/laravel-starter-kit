import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { TooltipsPage } from '@/pages/demo/pages/pagesDemo/ui/TooltipsPage'

export const Page = () => <TooltipsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Tooltips')) }} />
)

export default Page
