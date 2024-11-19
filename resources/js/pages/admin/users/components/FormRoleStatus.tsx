import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Button, Divider, Radio, RadioGroup, Switch } from '@nextui-org/react'
import { toast } from 'react-toastify'

import type { PageProps, InertiaResponse } from '@/types'
import type { Role } from '@/types/roles'

export const FormRoleStatus = () => {
	const { user, permission, roles } = usePage<PageProps>().props

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			role: user.roles ? user.roles[0].id : null,
			status: user.status ?? 'disabled',
			role_status: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('dashboard.user.update', { user }), {
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

	return (
		<>
			<form onSubmit={submit}>
				<section className="space-y-5">
					<div className="font-medium flex gap-5 items-center">
						{t('Role and status')}
						<Divider className="flex-1" />
					</div>

					{roles && (
						<fieldset className="space-y-1">
							<RadioGroup
								defaultValue={data.role.toString()}
								onValueChange={(e) => setData('role', e)}
							>
								{roles.map((role: Role) => (
									<Radio key={`role-${role.id}`} value={role.id.toString()}>
										{role.name}
									</Radio>
								))}
							</RadioGroup>
						</fieldset>
					)}

					<div className="flex flex-col gap-y-1">
						<label className="text-small text-foreground select-none">
							{t('User status')}
						</label>

						<Switch
							size="sm"
							aria-label="Remember me"
							value={'1'}
							isDisabled={processing}
							isSelected={data.status === 'enabled'}
							onValueChange={(val) => {
								setData('status', val ? 'enabled' : 'disabled')
								clearErrors('status')
							}}
							className="mx-2"
						>
							{t('Is the user enabled?')}
						</Switch>

						{errors.status && (
							<span className="text-tiny text-danger">{errors.status}</span>
						)}
					</div>

					<div className="pt-5 flex justify-end">
						<Button
							type="submit"
							color="primary"
							className="w-40"
							isLoading={processing}
							isDisabled={!isDirty}
						>
							{t('Save')}
						</Button>
					</div>
				</section>
			</form>
		</>
	)
}
