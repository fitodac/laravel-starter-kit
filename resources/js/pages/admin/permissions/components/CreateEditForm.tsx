import { useContext } from 'react'
import {
	Button,
	CheckboxGroup,
	Checkbox,
	Divider,
	cn,
	Spinner,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { PermissionContext } from '../providers/PermissionProvider'
import { ClassicInput } from '@/components/form'
import { useActions } from '../hooks/useActions'
import { usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'
import type { PermissionContextProps } from '@/types/permissions'

export const CreateEditForm = () => {
	const { state, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

	const {
		data,
		post,
		patch,
		errors,
		setData,
		processing,
		clearErrors,
		reset,
		inputName,
		submit,
	} = useActions()

	return (
		<div
			className={cn(
				'bg-background border border-divider border-b-none h-full relative overflow-hidden',
				'w-full flex justify-center items-center'
			)}
		>
			<div className="p-6 lg:px-10">
				<div className="text-lg">
					{state.selectedPermission
						? t('Edit permission')
						: t('New permission')}
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

					{/* <fieldset>
						{!state.selectedPermission ? (
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
									{state.selectedPermission.guard_name}
								</strong>
							</div>
						)}
					</fieldset> */}

					<div className="flex justify-end gap-5">
						<Button
							isDisabled={processing}
							onPress={() => {
								dispatch({ type: 'closeDrawer' })
								dispatch({ type: 'setSelectedPermission', payload: null })
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
