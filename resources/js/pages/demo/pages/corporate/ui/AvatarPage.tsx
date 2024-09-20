import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { AvatarPage } from '@/pages/demo/pages/pagesDemo/ui/AvatarPage'

export const Page = () => <AvatarPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Avatar')) }} />
)

export default Page
