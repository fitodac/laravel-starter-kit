import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	DropdownSection,
	User,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { usePage, router } from '@inertiajs/react'
import { ButtonSize } from '../../pages/demo/componentsDemo/ui/Buttons'

import type { PageProps } from '@/types'

export const ProfileDropdown = () => {
	const user = usePage<PageProps>().props.auth.user

	return (
		<>
			<Dropdown radius="none" classNames={{}}>
				<DropdownTrigger className="cursor-pointer select-none">
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
							base: 'rounded-none',
							name: 'text-foreground-600 leading-tight truncate w-24',
							description: 'text-foreground-400 leading-tight truncate w-24',
						}}
					/>
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					color="primary"
					variant="light"
				>
					<DropdownSection showDivider>
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
