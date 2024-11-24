import { usePage } from '@inertiajs/react'
import { useEffect } from 'react'
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Button,
} from '@nextui-org/react'
import ReactSafelySetInnerHTML from 'react-safely-set-inner-html'
import { t } from '@/i18n'
import { router } from '@inertiajs/react'
import { alowedTags } from '@/helpers/safelySetInnerHtmlAllowedTags'

import type { PageProps } from '@/types'

export const TopbarNotifications = () => {
	const { props } = usePage<PageProps>()
	const {
		auth: { user, notifications },
	} = props

	// Laravel  Echo
	useEffect(() => {
		user &&
			window.Echo.private(`App.Models.User.${user.id}`).notification(
				(notification: any) => {
					console.log('Notification test')
					console.log('Notification: ', notification)
				}
			)

		// return () => {
		// 	window.Echo.leaveChannel(`App.Models.User.${user.id}`)
		// }
	}, [user])

	if (!user || !notifications) return null

	useEffect(() => {
		const index = notifications.findIndex((n) => n.id === 'mark-all-as-read')

		if (notifications && notifications.length && index === -1) {
			notifications.push({ id: 'mark-all-as-read' })
		}
	}, [notifications])

	if (!notifications.length) return <TriggerButton />

	return (
		<>
			<Dropdown radius="none" placement="bottom-end">
				<DropdownTrigger className="cursor-pointer select-none">
					<div>
						<TriggerButton {...{ notifications }} />
					</div>
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					variant="light"
					classNames={{ base: 'w-96' }}
				>
					{notifications.map((notification, idx) =>
						idx === notifications.length - 1 ? (
							<DropdownItem
								key={notification.id}
								as={Button}
								color="primary"
								className="mt-3"
								onPress={() => {
									router.post(route('notification.markAllAsRead'))
								}}
							>
								{t('Mark all as read')}
							</DropdownItem>
						) : (
							<DropdownItem
								key={notification.id}
								textValue={String(notification.data.title)}
								description={
									<ReactSafelySetInnerHTML allowedTags={alowedTags}>
										{`<div class="[&>*]:truncate [&>*:not(:first-child)]:hidden">${notification.data.content}</div>`}
									</ReactSafelySetInnerHTML>
								}
								onPress={() => router.visit(route('notification.index'))}
							>
								<div className="text-xs font-medium">
									<ReactSafelySetInnerHTML>
										{notification.data.title}
									</ReactSafelySetInnerHTML>
								</div>
							</DropdownItem>
						)
					)}
				</DropdownMenu>
			</Dropdown>
		</>
	)
}

const TriggerButton = ({ notifications = [] }: { notifications?: any[] }) => {
	if (!notifications.length)
		return (
			<div className="relative">
				<i className="ri-notification-2-line" />
			</div>
		)

	return (
		<Button
			radius="full"
			isIconOnly
			variant="light"
			disableAnimation
			disableRipple
			className="pointer-events-none"
		>
			<i className="ri-notification-2-line" />

			{notifications &&
				Array.isArray(notifications) &&
				notifications.length > 0 && (
					<span className="bg-danger w-2.5 h-2.5 absolute top-2 right-2 rounded-full animate-pulse z-20" />
				)}
		</Button>
	)
}
