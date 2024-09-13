import { useEffect, useRef, type FormEvent } from 'react'
import { Layout } from '@/layouts/admin/corporate/Layout'
import { PageHeader, PageContent } from '@/components'
import { Link } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import {
	Button,
	CheckboxGroup,
	Checkbox,
	Card,
	CardBody,
} from '@nextui-org/react'
import { ClassicInput } from '@/components/form'
import { toast } from 'react-toastify'
import { DeleteRole } from './components'
import { t } from '@/i18n'

import type { Role } from '@/types/roles'

interface Props {
	role: Role | null
	permissions: { [key: string]: Role[] }
	protected_roles?: string[]
}

export const Page = ({ role, permissions, protected_roles }: Props) => {
	const isProtected = useRef(
		(role && protected_roles?.includes(role.name)) ?? false
	)
	const inputName = useRef<HTMLInputElement>(null)

	const { data, setData, post, patch, processing, errors, clearErrors } =
		useForm({
			name: '',
			permissions: [] as string[],
		})

	useEffect(() => {
		inputName.current?.focus()
	}, [])

	useEffect(() => {
		if (role) {
			setData({
				name: role.name,
				permissions: role.permissions.map((p) => p.name),
			})
		}
	}, [role])

	const submit = (e: FormEvent) => {
		e.preventDefault()

		if (role) {
			patch(route('dashboard.role.update', { role }), {
				preserveScroll: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}
				},
				onError: (errors) => console.log(errors),
			})
		} else {
			post(route('dashboard.role.store'), {
				preserveScroll: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}
				},
				onError: (errors) => console.log(errors),
			})
		}
	}

	return (
		<>
			<PageHeader title={role ? t('Role') : t('New Role')} />

			<PageContent>
				<div className="max-w-md space-y-10 lg:max-w-3xl">
					<div className="grid gap-x-6 gap-y-10 lg:grid-cols-2 lg:gap-x-16">
						<div className="w-52 space-y-6 lg:order-2">
							<Card
								className="bg-content4 mt-5 min-h-20"
								shadow="none"
								radius="md"
							>
								<CardBody>
									<div className="text-foreground-800 space-y-2">
										{role ? (
											<>
												<p className="text-sm text-right">
													Total users with this role
												</p>
												<p className="text-4xl font-light tracking-tighter text-right">
													{role.users_count}
												</p>
											</>
										) : (
											<p className="text-sm">
												{t('Dere are no users with this role')}
											</p>
										)}
									</div>
								</CardBody>
							</Card>

							{role && <DeleteRole {...{ role }} />}
						</div>

						<form onSubmit={submit} className="space-y-6">
							<fieldset>
								<ClassicInput
									isRequired
									ref={inputName}
									variant="faded"
									value={data.name}
									label={t('Role name')}
									isInvalid={errors.name ? true : false}
									errorMessage={errors.name}
									onKeyUp={() => clearErrors('name')}
									isDisabled={isProtected.current || processing}
									onValueChange={(e) => setData('name', e)}
								/>
							</fieldset>

							<fieldset className="space-y-6">
								{Object.keys(permissions).map((key) => (
									<div key={key}>
										<CheckboxGroup
											label={`${key} ${t('guards')}`}
											size="sm"
											value={data.permissions}
											isDisabled={processing}
											onValueChange={(val) => {
												setData('permissions', val)
											}}
											classNames={{
												label: 'text-foreground text-sm font-medium capitalize',
											}}
										>
											{permissions[key].map((e: Role) => (
												<div key={e.name} className="flex items-center gap-3">
													<Checkbox
														key={e.name}
														value={e.name}
														className="py-3"
													>
														{e.name}
													</Checkbox>
												</div>
											))}
										</CheckboxGroup>
									</div>
								))}
							</fieldset>

							<div className="flex gap-5 pt-4">
								<Button
									type="button"
									as={Link}
									isDisabled={processing}
									href={route('dashboard.roles.list')}
									className="w-32"
								>
									{t('Cancel')}
								</Button>

								<Button
									type="submit"
									color="primary"
									className="w-32"
									isLoading={processing}
								>
									{t('Save')}
								</Button>
							</div>
						</form>
					</div>
				</div>

				<div className="h-10"></div>
			</PageContent>

			<div className="h-20" />
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Roles')) }} />
)

export default Page
