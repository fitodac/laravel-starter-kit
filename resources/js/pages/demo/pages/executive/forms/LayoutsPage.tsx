import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { FormLayoutsPage } from '@/pages/demo/pages/pagesDemo/forms/FormLayoutsPage'

export const Page = () => <FormLayoutsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Form layouts')) }} />
)

export default Page
