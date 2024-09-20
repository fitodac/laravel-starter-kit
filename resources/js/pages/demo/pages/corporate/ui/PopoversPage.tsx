import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PopoverPage } from '@/pages/demo/pages/pagesDemo/ui/PopoverPage'

export const Page = () => <PopoverPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Popovers')) }} />
)

export default Page
