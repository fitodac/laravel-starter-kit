import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageContent } from '@/components'

interface Props {}

const Page = ({}: Props) => {
	return (
		<>
			<PageContent>Dashboard corporate</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: t('Dashboard') }} />
)

export default Page
