import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	User,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { PageProps } from '@/types'
import { usePage, router } from '@inertiajs/react'
import { ButtonSize } from '../../pages/demo/componentsDemo/ui/Buttons'

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
							name: 'text-foreground-600 leading-tight truncate w-32',
							description: 'text-foreground-400 leading-tight truncate w-32',
						}}
					/>
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					color="primary"
					variant="light"
				>
					<DropdownItem
						textValue={String(t('My account'))}
						onClick={() => router.visit(route('profile.edit'))}
					>
						{t('My account')}
					</DropdownItem>

					<DropdownItem
						textValue={String(t('Log out'))}
						onClick={() => router.post(route('logout'))}
					>
						{t('Log out')}
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}
