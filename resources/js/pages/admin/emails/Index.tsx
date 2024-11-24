import { Layout } from '@/layouts/admin/Layout'
import { PageHeader, PageContent } from '@/components'
import { t } from '@/i18n'
import { TemplatesList } from './components'
import 'react-modern-drawer/dist/index.css'

const pageTitle = String(t('Email templates'))

const Page = () => {
	return (
		<>
			<PageHeader title={pageTitle} />

			<PageContent>
				<TemplatesList />
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle }} />
)

export default Page
