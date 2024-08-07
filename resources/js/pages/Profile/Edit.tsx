import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { PageProps } from '@/types'
import {
	ProfileCard,
	UpdateProfile,
	UpdatePassword,
	DeleteAccount,
} from './components'

const Edit = ({
	auth,
	mustVerifyEmail,
	status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) => {
	return (
		<>
			<PageHeader title={t('My account')} />

			<PageContent>
				<div className="grid grid-cols-3 gap-6 lg:gap-12">
					<div className="col-span-1 space-y-8">
						<ProfileCard />
					</div>

					<div className="col-span-2 space-y-12">
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
