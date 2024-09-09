import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { ClassicInput } from '@/components/form'
import { Button, Textarea, Divider } from '@nextui-org/react'
import { toast } from 'react-toastify'

import type { PageProps, User, InertiaResponse } from '@/types'

export const FormProfessionalInformation = () => {
	const { user } = usePage<PageProps<{ user: User }>>().props

	const { data, setData, patch, processing, errors, clearErrors, isDirty } = useForm({
		id: user.id,
		job_title: user.job_title,
		company: user.company,
		bio: user.bio,
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
						{t('Professional information')}
						<Divider className="flex-1" />
					</div>

					<div className="grid grid-cols-2 gap-x-6 gap-y-5">
						<fieldset>
							<ClassicInput
								label={t('Job title')}
								variant="faded"
								value={data.job_title}
								isInvalid={errors.job_title ? true : false}
								errorMessage={errors.job_title}
								onKeyUp={() => clearErrors('job_title')}
								isDisabled={processing}
								onValueChange={(e) => setData('job_title', e)}
							/>
						</fieldset>

						<fieldset>
							<ClassicInput
								label={t('Company')}
								variant="faded"
								value={data.company}
								isInvalid={errors.company ? true : false}
								errorMessage={errors.company}
								onKeyUp={() => clearErrors('company')}
								isDisabled={processing}
								onValueChange={(e) => setData('company', e)}
							/>
						</fieldset>

						<fieldset className="col-span-2">
							<Textarea
								label={t('Biography')}
								variant="faded"
								value={data.bio}
								isInvalid={errors.bio ? true : false}
								errorMessage={errors.bio}
								onKeyUp={() => clearErrors('bio')}
								isDisabled={processing}
								onValueChange={(e) => setData('bio', e)}
							></Textarea>
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
