import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { ProgressPage } from '@/pages/demo/pages/pagesDemo/ui/ProgressPage'

export const Page = () => <ProgressPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Progress')) }} />
)

export default Page
