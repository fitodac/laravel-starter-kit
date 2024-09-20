import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { FormComponentsPage } from '@/pages/demo/pages/pagesDemo/forms/FormComponentsPage'

export const Page = () => <FormComponentsPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Form components')) }} />
)

export default Page
