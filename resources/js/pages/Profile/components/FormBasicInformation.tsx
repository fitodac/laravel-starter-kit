import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Input, Button, Divider } from '@nextui-org/react'
import { toast } from 'react-toastify'
import { FormProfileImage } from './FormProfileImage'

import type { PageProps, FlashMessage } from '@/types'

export const FormBasicInformation = () => {
	const user = usePage<PageProps>().props.auth.user

	if (!user) return null

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			id: user.id,
			name: user.name,
			lastname: user.lastname,
			username: user.username,
			email: user.email,
			basic_information: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('profile.update'), {
			preserveScroll: true,
			onSuccess: (resp) => {
				const flash = resp.props.flash as FlashMessage
				if (flash.success) toast.success(t(flash.success))
				if (flash.error) toast.error(t(flash.error))
			},
			onError: (errors) => console.log(errors),
		})
	}

	return (
		<>
			<form onSubmit={submit}>
				<section className="space-y-5 mt-5 md:mt-0">
					<div className="text-sm font-medium flex gap-5 items-center select-none">
						{t('Basic information')}
						<Divider className="flex-1" />
					</div>

					<FormProfileImage />

					<div className="grid gap-x-6 gap-y-5 lg:grid-cols-2">
						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Name')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.name}
								isInvalid={errors.name ? true : false}
								errorMessage={errors.name && String(t(errors.name))}
								onKeyUp={() => clearErrors('name')}
								isDisabled={processing}
								onValueChange={(e) => setData('name', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Lastname')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.lastname}
								isInvalid={errors.lastname ? true : false}
								errorMessage={errors.lastname && String(t(errors.lastname))}
								onKeyUp={() => clearErrors('lastname')}
								isDisabled={processing}
								onValueChange={(e) => setData('lastname', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Username')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.username}
								isInvalid={errors.username ? true : false}
								errorMessage={errors.username && String(t(errors.username))}
								onKeyUp={() => clearErrors('username')}
								isDisabled={processing}
								onValueChange={(e) => setData('username', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Email')}{' '}
								<i className="ri-circle-fill text-danger text-[6px] relative -top-2" />
							</label>

							<Input
								isRequired
								variant="faded"
								value={data.email}
								isInvalid={errors.email ? true : false}
								errorMessage={errors.email && String(t(errors.email))}
								onKeyUp={() => clearErrors('email')}
								isDisabled={processing}
								onValueChange={(e) => setData('email', e)}
							/>
						</fieldset>
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
