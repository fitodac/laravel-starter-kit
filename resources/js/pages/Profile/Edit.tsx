import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { PageProps } from '@/types'
import { UpdateProfile, UpdatePassword, DeleteAccount } from './components'

const Edit = ({
	auth,
	mustVerifyEmail,
	status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) => {
	return (
		<>
			<PageHeader title={t('My account')} />

			<PageContent>
				<div className="space-y-6 lg:max-w-xl">
					<div className="bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20">
						<UpdateProfile {...{ mustVerifyEmail, status }} />
					</div>

					<div className="bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20">
						<UpdatePassword />
					</div>

					<div className="bg-white p-10 shadow-xl rounded-2xl dark:bg-black/20">
						<DeleteAccount />
					</div>
				</div>
			</PageContent>

			<div className="h-20" />
		</>
	)
}

Edit.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('My account')) }} />
)

export default Edit
