import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { ModalPage } from '@/pages/demo/pages/pagesDemo/ui/ModalPage'

export const Page = () => <ModalPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Modal')) }} />
)

export default Page
