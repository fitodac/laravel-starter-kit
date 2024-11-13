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
} from './components'
import { Button, Card, CardBody, Tabs, Tab } from '@nextui-org/react'
import { router } from '@inertiajs/react'

const sendEmailAccountConfirmation = () => {
	router.post(route('verification.send'))
}

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
							<>
								{status !== 'verification-link-sent' ? (
									<Card
										shadow="none"
										className="bg-danger-50 text-danger-500 pl-14 pr-6 py-6"
									>
										<i className="ri-mail-unread-line ri-2x left-3 top-4 absolute" />
										<CardBody className="p-0">
											<div className="flex justify-between items-center">
												<p className="text-danger font-light">
													{t('Your email address is unverified')}
												</p>

												<div>
													<Button
														size="sm"
														color="danger"
														onPress={sendEmailAccountConfirmation}
													>
														{t('email-verify-link')}
													</Button>
												</div>
											</div>
										</CardBody>
									</Card>
								) : (
									<>
										<Card
											shadow="none"
											className="bg-success-50 text-success-500 pl-14 pr-6 py-6"
										>
											<i className="ri-mail-check-line ri-2x left-3 top-3 absolute" />
											<CardBody className="text-sm font-light p-0">
												{t('verification-link-sent-notice')}
											</CardBody>
										</Card>
									</>
								)}
							</>
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
	<Layout {...{ children: page, pageTitle: String(t('My account')) }} />
)

export default Page
