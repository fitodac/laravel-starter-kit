import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { TipTapPage } from '@/pages/demo/pages/pagesDemo/forms/TipTapPage'

export const Page = () => <TipTapPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Wysiwyg')) }} />
)

export default Page
