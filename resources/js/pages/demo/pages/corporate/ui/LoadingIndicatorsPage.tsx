import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { LoadingIndicatorsPage } from '@/pages/demo/pages/pagesDemo/ui/LoadingIndicatorsPage'

export const Page = () => <LoadingIndicatorsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Loading indicators')) }} />
)

export default Page
