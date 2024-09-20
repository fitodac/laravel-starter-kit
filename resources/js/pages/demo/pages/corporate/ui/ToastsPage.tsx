import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { ToastPage } from '@/pages/demo/pages/pagesDemo/ui/ToastPage'

export const Page = () => <ToastPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Toasts')) }} />
)

export default Page
