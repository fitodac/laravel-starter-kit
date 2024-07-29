import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Divider,
	Button,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { PageProps } from '@/types'
import { usePage, router } from '@inertiajs/react'

export const ProfileDropdown = () => {
	const user = usePage<PageProps>().props.auth.user

	return (
		<>
			<Dropdown radius="sm">
				<DropdownTrigger>
					<Button
						variant="light"
						endContent={<i className="ri-arrow-down-s-line" />}
					>
						{user?.name}
					</Button>
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					color="primary"
					variant="light"
				>
					<DropdownItem
						textValue={t('My account')}
						onClick={() => router.visit(route('profile.edit'))}
					>
						{t('My account')}
					</DropdownItem>

					<DropdownItem
						textValue={t('Log out')}
						onClick={() => router.post(route('logout'))}
					>
						{t('Log out')}
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}
