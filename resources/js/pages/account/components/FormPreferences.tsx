import { FormEvent } from 'react'
import { t } from '@/i18n'
import { useForm, usePage } from '@inertiajs/react'
import { Button, Divider, RadioGroup, Radio } from '@nextui-org/react'
import { toast } from 'react-toastify'
import ReactSafelySetInnerHTML from 'react-safely-set-inner-html'

import type { PageProps, InertiaResponse } from '@/types'

export const FormPreferences = () => {
	const user = usePage<PageProps>().props.auth.user
	const props = usePage<PageProps>().props
	if (!user) return null

	const { account } = user

	const { data, setData, patch, processing, errors, clearErrors, isDirty } =
		useForm({
			colorMode: account.colorMode ?? props.colorMode,
			language: account.language ?? document.documentElement.lang,
			preferences: true,
		})

	const submit = (e: FormEvent) => {
		e.preventDefault()

		patch(route('account.update'), {
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
					<div className="text-sm font-medium flex gap-5 items-center">
						{t('Preferences')}
						<Divider className="flex-1" />
					</div>

					<div className="space-y-5">
						<fieldset className="space-y-3">
							<label htmlFor="" className="text-sm">
								{t('Appearance')}
								<p className="text-xs">
									{t(
										'Select a single theme or sync with your system, automatically switching between day and night themes.'
									)}
								</p>
							</label>

							<RadioGroup
								size="sm"
								orientation="horizontal"
								defaultValue={data.colorMode}
								isInvalid={errors.colorMode !== undefined}
								onValueChange={(val) => setData('colorMode', val)}
							>
								<Radio value="light">{t('Light')}</Radio>
								<Radio value="dark">{t('Dark')}</Radio>
							</RadioGroup>

							{errors.colorMode && (
								<div className="text-danger text-xs">
									<ReactSafelySetInnerHTML>
										{errors.colorMode}
									</ReactSafelySetInnerHTML>
								</div>
							)}
						</fieldset>

						<Divider />

						<fieldset className="space-y-3">
							<label htmlFor="" className="text-sm">
								{t('Language')}
							</label>

							<RadioGroup
								size="sm"
								orientation="horizontal"
								defaultValue={data.language}
								isInvalid={errors.language !== undefined}
								onValueChange={(val) => setData('language', val)}
							>
								<Radio value="en">{t('English')}</Radio>
								<Radio value="sp">{t('Spanish')}</Radio>
							</RadioGroup>

							{errors.language && (
								<div className="text-danger text-xs">
									<ReactSafelySetInnerHTML>
										{errors.language}
									</ReactSafelySetInnerHTML>
								</div>
							)}
						</fieldset>
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
		</>
	)
}
