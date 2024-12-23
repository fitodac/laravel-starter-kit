import { Layout } from '@/layouts/user/Layout'
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
import { useWindowWidth } from '@/hooks'

const pageTitle = String(t('My profile'))

const Page = ({ auth: { user }, mustVerifyEmail, status }: PageProps) => {
	const { windowWidth } = useWindowWidth()

	if (!user) return null

	return (
		<>
			<PageHeader title={pageTitle} />

			<PageContent>
				<div className="flex flex-col flex-1 max-w-full">
					<div>
						{mustVerifyEmail && user.email_verified_at === null && (
							<MustVerifyEmail {...{ status }} />
						)}
					</div>

					<Tabs
						aria-label="Profile tabs"
						color="primary"
						variant="light"
						isVertical={windowWidth > 768 ? true : false}
						classNames={{
							panel: 'w-full max-w-screen-md md:px-6 xl:pl-20',
							tab: 'justify-start font-medium select-none',
							base: 'w-full overflow-x-hidden md:w-72 lg:w-auto',
							tabList: 'bg-red-500 w-full overflow-x-auto',
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
