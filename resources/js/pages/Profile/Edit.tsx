import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { PageProps } from '@/types'
import {
	FormBasicInformation,
	FormPersonalInformation,
	FormProfessionalInformation,
	FormPassword,
	DeleteAccount,
	MustVerifyEmail,
} from './components'
import { Tabs, Tab } from '@nextui-org/react'

const pageTitle = String(t('My profile'))

const Page = ({ auth: { user }, mustVerifyEmail, status }: PageProps) => {
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
						<Tab key="basicInformation" title="Basic information">
							<FormBasicInformation />
						</Tab>

						<Tab key="personalInformation" title="Personal information">
							<FormPersonalInformation />
						</Tab>

						<Tab key="professionalInformation" title="Professional information">
							<FormProfessionalInformation />
						</Tab>

						<Tab key="security" title="Security">
							<FormPassword />
						</Tab>

						<Tab key="advanced" title="Advanced">
							<DeleteAccount />
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
