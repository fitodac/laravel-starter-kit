import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import 'react-modern-drawer/dist/index.css'
import { DrawerPage } from '@/pages/demo/pages/pagesDemo/ui/DrawerPage'

export const Page = () => {
	return <DrawerPage />
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Drawer')) }} />
)

export default Page
