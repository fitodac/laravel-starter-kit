import { useRef } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { router, Link } from '@inertiajs/react'
import {
	Image,
	Button,
	Card,
	CardHeader,
	CardBody,
	Chip,
	cn,
	Tabs,
	Tab,
} from '@nextui-org/react'
import { useUser } from '@/hooks'
import { toast } from 'react-toastify'
import {
	FormBasicInformation,
	FormPersonalInformation,
	FormProfessionalInformation,
	FormPassword,
	SessionsManager,
	DeleteAccount,
} from './components'

import userBlank from '@/assets/img/blank-462x265.webp'

import type { PageProps, User } from '@/types'

const pageTitle = String(t('Edit user'))

interface Props extends PageProps {
	user: User
}

export const Page = ({ user }: Props) => {
	return (
		<>
			<PageHeader title={pageTitle}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						variant="flat"
						startContent={<i className="ri-arrow-left-line" />}
						as={Link}
						href={route('dashboard.users.list')}
					>
						{t('Back to users list')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<div className="flex flex-col flex-1">
					<div className="">
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

							<Tab
								key="professionalInformation"
								title="Professional information"
							>
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
				</div>
			</PageContent>

			<div className="h-20"></div>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout
		{...{
			children: page,
			pageTitle,
		}}
	/>
)

export default Page
