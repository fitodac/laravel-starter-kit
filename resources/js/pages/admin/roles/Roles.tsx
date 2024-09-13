import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { RolesList } from './components'
import { Button } from '@nextui-org/react'
import { Link } from '@inertiajs/react'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Roles')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						as={Link}
						href={route('dashboard.role.create')}
					>
						{t('Add new role')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<RolesList />
			</PageContent>

			<div className="h-20" />
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Roles')) }} />
)

export default Page
