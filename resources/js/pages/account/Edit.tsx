import { Layout } from '@/layouts/user/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { FormPreferences } from './components'
import { MustVerifyEmail } from '../profile/components'
import { Tabs, Tab } from '@heroui/react'

import type { PageProps } from '@/types'

const pageTitle = 'My account'

interface Props extends PageProps {
	account: any
}

const Page = ({ auth: { user }, mustVerifyEmail, status }: Props) => {
	if (!user) return null

	return (
		<>
			<PageHeader title={t(pageTitle)} />

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
					</Tabs>
				</div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => {
	return <Layout {...{ children: page, pageTitle: t(pageTitle).toString() }} />
}

export default Page
