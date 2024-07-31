import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { UsersList } from './components/UsersList'

interface Props {
	users: any
}

export const Page = ({ users }: Props) => {
	return (
		<>
			<PageHeader title={t('Users')}></PageHeader>

			<PageContent>
				<UsersList />
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Buttons')) }} />
)

export default Page
