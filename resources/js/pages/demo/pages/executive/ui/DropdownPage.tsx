import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { DropdownPage } from '@/pages/demo/pages/pagesDemo/ui/DropdownPage'

export const Page = () => <DropdownPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Dropdown')) }} />
)

export default Page
