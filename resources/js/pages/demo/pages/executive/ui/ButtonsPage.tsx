import { Layout } from '@/layouts/admin/executive/Layout'
import { ButtonsPage } from '@/pages/demo/pages/pagesDemo/ui/ButtonsPage'
import { t } from '@/i18n'

export const Page = () => {
	return <ButtonsPage />
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Buttons')) }} />
)

export default Page
