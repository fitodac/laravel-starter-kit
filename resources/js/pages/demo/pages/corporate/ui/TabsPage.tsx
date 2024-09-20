import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { TabsPage } from '@/pages/demo/pages/pagesDemo/ui/TabsPage'

export const Page = () => <TabsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Tabs')) }} />
)

export default Page
