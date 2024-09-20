import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { ImagePage } from '@/pages/demo/pages/pagesDemo/ui/ImagePage'

export const Page = () => <ImagePage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Image')) }} />
)

export default Page
