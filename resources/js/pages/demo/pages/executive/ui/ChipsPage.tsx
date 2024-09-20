import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { ChipsPage } from '@/pages/demo/pages/pagesDemo/ui/ChipsPage'

export const Page = () => <ChipsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Chips')) }} />
)

export default Page
