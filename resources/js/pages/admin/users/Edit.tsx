import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { useForm } from '@inertiajs/react'
import {
	Avatar,
	Button,
	Card,
	CardHeader,
	CardBody,
	Divider,
	Chip,
} from '@nextui-org/react'
import { useUser } from '@/hooks'
import { toast } from 'react-toastify'
import {
	FormBasicInformation,
	FormPersonalInformation,
	FormProfessionalInformation,
} from './components'

import type { PageProps, User } from '@/types'

interface Props extends PageProps {
	user: User
}

export const Page = ({ user }: Props) => {
	const { fullName } = useUser(user)

	const { data, setData, post, put, patch, processing, errors } = useForm({
		id: user.id ?? null,
		profile_picture: user.profile_picture ?? '',
	})

	return (
		<>
			<PageHeader title={t('Edit user')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						variant="flat"
						startContent={<i className="ri-arrow-left-line" />}
						onPress={() => window.history.back()}
					>
						{t('Back')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<div className="grid grid-cols-3 gap-6">
					<div className="col-span-1">
						<Card className="mt-10 overflow-visible">
							<CardHeader className="pb-4 flex-col overflow-visible">
								<div className="flex gap-x-5">
									<Avatar
										className="w-32 h-32 -mt-12"
										src={`/storage/img/users/avatars/${user.profile_picture}`}
									/>

									<div className="flex-1 space-y-4">
										<div className="flex gap-x-3">
											<Chip
												size="sm"
												color="primary"
												variant="flat"
												className="cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled"
											>
												{t('Change picture')}
											</Chip>

											<Chip
												size="sm"
												color="danger"
												variant="flat"
												className="cursor-pointer select-none hover:opacity-90 focus:opacity-50 active:opacity-disabled"
											>
												{t('Delete picture')}
											</Chip>
										</div>

										<div className="space-y-1">
											<div className="text-sm">
												{user && '@' + user.username}
											</div>
											<div className="text-foreground-500 text-sm font-medium">
												{user && (
													<Chip
														size="sm"
														color="primary"
														variant="flat"
														className="h-5 px-1.5"
													>
														{user.role}
													</Chip>
												)}
											</div>
										</div>
									</div>
								</div>
							</CardHeader>
							<Divider />
							<CardBody>
								<ul className="text-sm px-5 pt-6 pb-10 space-y-3 [&>li]:flex [&>li]:justify-between">
									<li>
										<span className="text-foreground-500">{t('Status')}</span>
										<span>
											<Chip
												size="sm"
												variant="dot"
												color={user.status === 'active' ? 'success' : 'danger'}
											>
												{user.status}
											</Chip>
										</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Name')}</span>
										<span>{fullName}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Email')}</span>
										<span>{user.email}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Phone')}</span>
										<span>{user.phone}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Company')}</span>
										<span>{user.company}</span>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className="col-span-2 space-y-12 mt-10">
						<FormBasicInformation />
						<FormPersonalInformation />
						<FormProfessionalInformation />
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
			pageTitle: `${t('User')} ${page.props.user && page.props.user.username}`,
		}}
	/>
)

export default Page
