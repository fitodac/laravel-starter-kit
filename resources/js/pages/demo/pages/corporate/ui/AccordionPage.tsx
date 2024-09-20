import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { AccordionPage } from '@/pages/demo/pages/pagesDemo/ui/AccordionPage'

export const Page = () => <AccordionPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Accordion')) }} />
)

export default Page
