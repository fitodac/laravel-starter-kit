import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { ListBoxPage } from '@/pages/demo/pages/pagesDemo/ui/ListBoxPage'

export const Page = () => <ListBoxPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('ListBox')) }} />
)

export default Page
