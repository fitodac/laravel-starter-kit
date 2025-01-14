import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Input, Button, Divider } from '@nextui-org/react'
import { toast } from 'react-toastify'

import type { PageProps, InertiaResponse, FlashMessage } from '@/types'

export const FormPersonalInformation = () => {
	const user = usePage<PageProps>().props.auth.user

	if (!user) return null

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			id: user.id,
			phone: user.phone,
			birth_date: user.birth_date,
			address: user.address,
			city: user.city,
			country: user.country,
			zip: user.zip,
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
						{t('Personal information')}
						<Divider className="flex-1" />
					</div>

					<div className="grid gap-x-6 gap-y-5 lg:grid-cols-2">
						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Phone')}
							</label>

							<Input
								variant="faded"
								value={data.phone}
								isInvalid={errors.phone ? true : false}
								errorMessage={errors.phone}
								onKeyUp={() => clearErrors('phone')}
								isDisabled={processing}
								onValueChange={(e) => setData('phone', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Birth date')}
							</label>

							<Input
								variant="faded"
								value={data.birth_date}
								isInvalid={errors.birth_date ? true : false}
								errorMessage={errors.birth_date}
								onKeyUp={() => clearErrors('birth_date')}
								isDisabled={processing}
								onValueChange={(e) => setData('birth_date', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Address')}
							</label>

							<Input
								variant="faded"
								value={data.address}
								isInvalid={errors.address ? true : false}
								errorMessage={errors.address}
								onKeyUp={() => clearErrors('address')}
								isDisabled={processing}
								onValueChange={(e) => setData('address', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('City')}
							</label>

							<Input
								variant="faded"
								value={data.city}
								isInvalid={errors.city ? true : false}
								errorMessage={errors.city}
								onKeyUp={() => clearErrors('city')}
								isDisabled={processing}
								onValueChange={(e) => setData('city', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Country')}
							</label>

							<Input
								variant="faded"
								value={data.country}
								isInvalid={errors.country ? true : false}
								errorMessage={errors.country}
								onKeyUp={() => clearErrors('country')}
								isDisabled={processing}
								onValueChange={(e) => setData('country', e)}
							/>
						</fieldset>

						<fieldset className="space-y-1">
							<label htmlFor="" className="text-sm">
								{t('Zip')}
							</label>

							<Input
								variant="faded"
								value={data.zip}
								isInvalid={errors.zip ? true : false}
								errorMessage={errors.zip}
								onKeyUp={() => clearErrors('zip')}
								isDisabled={processing}
								onValueChange={(e) => setData('zip', e)}
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
