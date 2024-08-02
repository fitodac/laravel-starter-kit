import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { UsersList } from './components/UsersList'
import { Button } from '@nextui-org/react'
import { Link } from '@inertiajs/react'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Users')}>
				<div className="flex justify-end">
					<Button
						color="primary"
						className="px-6"
						as={Link}
						href={route('dashboard.user.create')}
					>
						{t('New user')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<UsersList />
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Users')) }} />
)

export default Page
