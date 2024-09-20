import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	DropdownSection,
	User,
	Avatar,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { usePage, router } from '@inertiajs/react'
import { ButtonSize } from '../../pages/demo/componentsDemo/ui/Buttons'

import type { PageProps } from '@/types'
import { OrientatedMenuDropdown } from '../../pages/demo/componentsDemo/ui/Dropdowns'

interface Props {
	showName?: boolean
	showNameInDropdown?: boolean
}

export const ProfileDropdown = ({
	showName,
	showNameInDropdown = true,
}: Props) => {
	const user = usePage<PageProps>().props.auth.user

	return (
		<>
			<Dropdown radius="none" placement="bottom-end">
				<DropdownTrigger className="cursor-pointer select-none">
					{showName ? (
						<User
							isFocusable
							name={user.name}
							description={user.company}
							avatarProps={{
								size: 'sm',
								color: 'primary',
								name: user.name[0] + user.lastname[0],
								src: `/storage/img/users/avatars/${user.profile_picture}`,
							}}
							classNames={{
								base: 'rounded-none flex-row-reverse',
								name: 'text-foreground-600 leading-tight truncate w-24',
								description: 'text-foreground-400 leading-tight truncate w-24',
							}}
						/>
					) : (
						<Avatar
							{...{
								size: 'sm',
								color: 'primary',
								name: user.name[0] + user.lastname[0],
								src: `/storage/img/users/avatars/${user.profile_picture}`,
							}}
						/>
					)}
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					color="primary"
					variant="light"
				>
					<DropdownSection showDivider>
						{showNameInDropdown ? (
							<DropdownItem
								textValue={String(t('My account'))}
								isReadOnly
								description={user.company}
								className="select-none cursor-default"
							>
								{user.name}
							</DropdownItem>
						) : (
							<></>
						)}

						<DropdownItem
							textValue={String(t('My account'))}
							onClick={() => router.visit(route('profile.edit'))}
							startContent={<i className="ri-profile-line ri-lg" />}
						>
							{t('My account')}
						</DropdownItem>
					</DropdownSection>

					<DropdownSection>
						<DropdownItem
							textValue={String(t('Log out'))}
							onClick={() => router.post(route('logout'))}
							startContent={
								<i className="ri-logout-circle-r-line ri-lg text-danger" />
							}
						>
							{t('Log out')}
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}
