import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { AlertsPage } from '@/pages/demo/pages/pagesDemo/ui/AlertsPage'

export const Page = () => <AlertsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Alerts')) }} />
)

export default Page
