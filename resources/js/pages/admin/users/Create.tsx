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
import { ClassicInput } from '@/components/form'
import { toast } from 'react-toastify'
import { useGeneratePassword } from '@/hooks'

import type { PageProps, User } from '@/types'

interface Props extends PageProps {
	user: User
}

export const Page = ({ user }: Props) => {
	const { fullName } = useUser(user)
	const { generatePassword } = useGeneratePassword()

	const fillPassword = () => {
		const val = generatePassword()
		setData('password', val)
	}

	const { data, setData, post, processing, errors, clearErrors, transform } =
		useForm({
			name: '',
			lastname: '',
			username: '',
			email: '',
			password: '',
			basic_information: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		post(route('dashboard.user.store', { user }), {
			preserveScroll: true,
			onSuccess: (resp) => console.log(resp),
			onError: (errors) => console.log(errors),
		})
	}

	return (
		<>
			<PageHeader title={user ? t('Edit user') : t('Create user')}>
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
									<Avatar className="w-32 h-32 -mt-12" src={''} />

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
										<span className="text-foreground-500">{t('Name')}</span>
										<span>{user && fullName}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Email')}</span>
										<span>{user && user.email}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Phone')}</span>
										<span>{user && user.phone}</span>
									</li>
									<li>
										<span className="text-foreground-500">{t('Company')}</span>
										<span>{user && user.company}</span>
									</li>
								</ul>
							</CardBody>
						</Card>
					</div>

					<div className="col-span-2 space-y-10 mt-10">
						<form onSubmit={submit}>
							<section className="space-y-3">
								<div className="font-medium">{t('Basic information')}</div>

								<div className="grid grid-cols-2 gap-x-6 gap-y-5">
									<fieldset>
										<ClassicInput
											isRequired
											label={t('Name')}
											variant="faded"
											value={data.name}
											isInvalid={errors.name ? true : false}
											errorMessage={errors.name}
											onKeyUp={() => clearErrors('name')}
											isDisabled={processing}
											onValueChange={(e) => setData('name', e)}
										/>
									</fieldset>

									<fieldset>
										<ClassicInput
											isRequired
											label={t('Lastname')}
											variant="faded"
											value={data.lastname}
											isInvalid={errors.lastname ? true : false}
											errorMessage={errors.lastname}
											onKeyUp={() => clearErrors('lastname')}
											isDisabled={processing}
											onValueChange={(e) => setData('lastname', e)}
										/>
									</fieldset>

									<fieldset>
										<ClassicInput
											isRequired
											label={t('Username')}
											variant="faded"
											value={data.username}
											isInvalid={errors.username ? true : false}
											errorMessage={errors.username}
											onKeyUp={() => clearErrors('username')}
											isDisabled={processing}
											onValueChange={(e) => setData('username', e)}
										/>
									</fieldset>

									<fieldset>
										<ClassicInput
											isRequired
											label={t('Email')}
											variant="faded"
											value={data.email}
											isInvalid={errors.email ? true : false}
											errorMessage={errors.email}
											onKeyUp={() => clearErrors('email')}
											isDisabled={processing}
											onValueChange={(e) => setData('email', e)}
										/>
									</fieldset>

									<fieldset>
										<ClassicInput
											isRequired
											label={t('Password')}
											variant="faded"
											value={data.password}
											isInvalid={errors.password ? true : false}
											errorMessage={errors.password}
											onKeyUp={() => clearErrors('password')}
											description={t(
												'The password must be at least 8 characters long'
											)}
											isDisabled={processing}
											onValueChange={(e) => setData('password', e)}
										/>
									</fieldset>

									<div className="pt-6">
										<Button size="sm" color="primary" onPress={fillPassword}>
											Generate password
										</Button>
									</div>
								</div>

								<div className="pt-5 flex justify-end">
									<Button
										type="submit"
										color="primary"
										className="w-40"
										isLoading={processing}
									>
										{t('Save')}
									</Button>
								</div>
							</section>
						</form>
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
