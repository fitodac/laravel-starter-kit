import { useCallback, useEffect, useRef, type FormEvent } from 'react'
import { usePage, useForm, router } from '@inertiajs/react'
import {
	Button,
	CheckboxGroup,
	Checkbox,
	Divider,
	cn,
	Spinner,
} from '@nextui-org/react'
import { ClassicInput } from '@/components/form'
import { t } from '@/i18n'
import { toast } from 'react-toastify'

import type { PageProps } from '@/types'
import type { Permission } from '@/types/permissions'

interface Props {
	drawerOpen: boolean
	setDrawerOpen: (open: boolean) => void
	selectedPermission: Permission | null
	setSelectedPermission: (selectedPermission: Permission | null) => void
}

export const CreateEditForm = ({
	drawerOpen,
	setDrawerOpen,
	selectedPermission,
	setSelectedPermission,
}: Props) => {
	const {
		props: { guards },
	} = usePage<PageProps>()
	const inputName = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setTimeout(() => {
			inputName.current?.focus()
		}, 300)
	}, [drawerOpen])

	const { data, post, patch, errors, setData, processing, clearErrors, reset } =
		useForm({
			name: '',
			guard_name: ['web'],
		})

	/**
	 * Effect hook that sets the form data when the `selectedPermission` state changes.
	 *
	 * @description
	 * This effect hook is called when the `selectedPermission` state changes.
	 * It sets the form data with the `name` and `guard_name` properties of the `selectedPermission` state.
	 */
	useEffect(() => {
		if (selectedPermission !== null) {
			setData({
				name: selectedPermission.name,
				guard_name: selectedPermission.guard_name.split(','),
			})
		}
	}, [selectedPermission])

	/**
	 * Callback function that is called when the form is submitted successfully.
	 *
	 * @description
	 * This function is called when the form is submitted successfully.
	 * It resets the form, sets the `selectedPermission` state to `null`, and reloads the `permissions` prop.
	 */
	const successCallback = useCallback(() => {
		setDrawerOpen(false)

		reset()
		setSelectedPermission(null)
		router.reload({ only: ['permissions'] })
	}, [])

	/**
	 * Handles the form submission by sending either a POST or PATCH request
	 * depending on whether a permission is being created or updated.
	 *
	 * @param {FormEvent} e - The form event.
	 */
	const submit = (e: FormEvent) => {
		e.preventDefault()

		if (selectedPermission) {
			/**
			 * Sends a PATCH request to update the selected permission.
			 *
			 * @param {string} route - The route to send the PATCH request to.
			 * @param {Object} options - The options for the PATCH request.
			 * @param {boolean} options.preserveScroll - Whether to preserve the scroll position.
			 * @param {Function} options.onSuccess - Callback function to handle a successful response.
			 * @param {Function} options.onError - Callback function to handle errors.
			 */
			patch(
				route('dashboard.permissions.update', {
					permission: selectedPermission,
				}),
				{
					preserveScroll: true,
					// @ts-ignore
					onSuccess: (resp: InertiaResponse) => {
						if (resp.props.flash && resp.props.flash.success) {
							toast.success(t(resp.props.flash.success))
						}

						successCallback()
					},
					onError: (errors) => console.log(errors),
				}
			)
		} else {
			/**
			 * Sends a POST request to store permissions and handles the response.
			 *
			 * @param {string} route - The route to send the POST request to.
			 * @param {Object} options - The options for the POST request.
			 * @param {boolean} options.preserveScroll - Whether to preserve the scroll position.
			 * @param {Function} options.onSuccess - Callback function to handle a successful response.
			 * @param {InertiaResponse} options.onSuccess.resp - The response object from the server.
			 * @param {Function} successCallback - Callback function to be called after a successful response.
			 * @param {Function} options.onError - Callback function to handle errors.
			 */
			post(route('dashboard.permissions.store'), {
				preserveScroll: true,
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}

					successCallback()
				},
				onError: (errors) => console.log(errors),
			})
		}
	}

	return (
		<div
			className={cn(
				'bg-background border border-divider border-b-none mx-auto relative overflow-hidden',
				'md:w-[600px]',
				'shadow-black/20 rounded-t-xl shadow-xl'
			)}
		>
			<div className="p-6 lg:px-10">
				<div className="text-lg">
					{selectedPermission
						? t('Edit permission')
						: t('Create new permission')}
				</div>
				<Divider className="my-4" />

				<form onSubmit={submit} className="pb-10 space-y-5">
					<fieldset>
						<ClassicInput
							isRequired
							variant="faded"
							ref={inputName}
							label={t('Permission name')}
							value={data.name}
							isInvalid={errors.name ? true : false}
							errorMessage={errors.name}
							onKeyUp={() => clearErrors('name')}
							isDisabled={processing}
							onValueChange={(e) => setData('name', e)}
						/>
					</fieldset>

					<fieldset>
						{!selectedPermission ? (
							<CheckboxGroup
								isRequired
								label="Guards"
								orientation="horizontal"
								value={data.guard_name}
								isInvalid={errors.guard_name ? true : false}
								errorMessage={errors.guard_name}
								isDisabled={processing}
								onValueChange={(val) => {
									setData('guard_name', val)
									clearErrors('guard_name')
								}}
								// description={t(
								// 	'You must select at least one guard to create permission.'
								// )}
							>
								{Array.isArray(guards) &&
									guards.map((e: string) => (
										<Checkbox key={e} value={e}>
											{e}
										</Checkbox>
									))}
							</CheckboxGroup>
						) : (
							<div className="text-primary text-sm">
								Guard:{' '}
								<strong className="uppercase">
									{selectedPermission.guard_name}
								</strong>
							</div>
						)}
					</fieldset>

					<div className="flex justify-end gap-5">
						<Button
							isDisabled={processing}
							onPress={() => {
								setDrawerOpen(false)
								setSelectedPermission(null)
								reset()
							}}
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

			{processing && (
				<div className="bg-white/70 inset-0 absolute grid place-content-center z-30 dark:bg-black/80">
					<Spinner />
				</div>
			)}
		</div>
	)
}
