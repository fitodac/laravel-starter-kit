import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { CardsPage } from '@/pages/demo/pages/pagesDemo/ui/CardsPage'

export const Page = () => <CardsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Cards')) }} />
)

export default Page
