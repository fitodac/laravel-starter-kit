import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { FormPreferences, FormNotifications } from './components'
import { MustVerifyEmail } from '../profile/components'
import { Tabs, Tab } from '@nextui-org/react'

import type { PageProps } from '@/types'

const pageTitle = String(t('My account'))

interface Props extends PageProps {
	account: any
}

const Page = ({ auth: { user }, mustVerifyEmail, status }: Props) => {
	if (!user) return null

	return (
		<>
			<PageHeader title={pageTitle} />

			<PageContent>
				<div className="flex flex-col flex-1">
					<div>
						{mustVerifyEmail && user.email_verified_at === null && (
							<MustVerifyEmail {...{ status }} />
						)}
					</div>

					<Tabs
						aria-label="Profile tabs"
						color="primary"
						variant="light"
						placement="start"
						classNames={{
							panel: 'w-full max-w-screen-md xl:pl-20',
							tab: 'justify-start',
						}}
					>
						<Tab key="preferences" title="Preferences">
							<FormPreferences />
						</Tab>

						<Tab key="notifications" title="Notifications">
							<FormNotifications />
						</Tab>
					</Tabs>
				</div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle }} />
)

export default Page
