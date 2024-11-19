import { usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
import { useEffect } from 'react'
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Button,
} from '@nextui-org/react'
import ReactSafelySetInnerHTML from 'react-safely-set-inner-html'

export const TopbarNotifications = () => {
	const { props } = usePage<PageProps>()
	const {
		auth: { user, notifications },
	} = props

	if (!user) return null

	useEffect(() => {
		// window.Echo.private(`App.Models.User.${user.id}`).notification(
		// 	(notification: any) => {
		// 		console.log('Notification: ', notification)
		// 	}
		// )
		// return () => {
		// 	window.Echo.leaveChannel(`App.Models.User.${user.id}`)
		// }
	}, [])

	useEffect(() => {
		// console.log('Notifications: ', notifications)
	}, [notifications])

	if (!notifications.length) return <TriggerButton />

	return (
		<>
			<Dropdown
				radius="none"
				placement="bottom-end"
				// onOpenChange={() => {
				// notifications.length &&
				// 	router.post(route('dashboard.notification.markAllAsRead'))
				// }}
			>
				<DropdownTrigger className="cursor-pointer select-none">
					<div>
						<TriggerButton {...{ notifications }} />
					</div>
				</DropdownTrigger>

				<DropdownMenu
					aria-label="Profile dropdown"
					color="primary"
					variant="light"
				>
					{notifications.length > 0 ? (
						notifications.map((notification) => (
							<DropdownItem
								key={notification.id}
								textValue={String(notification.data.title)}
								// onClick={() =>
								// 	router.post(
								// 		route('dashboard.notification.markAsRead', { notification })
								// 	)
								// }
								description={
									<ReactSafelySetInnerHTML>
										{notification.data.content}
									</ReactSafelySetInnerHTML>
								}
							>
								{notification.data.title}
							</DropdownItem>
						))
					) : (
						<></>
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
		<Button radius="full" isIconOnly variant="light">
			<i className="ri-notification-2-line" />

			{notifications &&
				Array.isArray(notifications) &&
				notifications.length > 0 && (
					<span className="bg-danger w-2.5 h-2.5 absolute top-0 -right-1 rounded-full animate-pulse" />
				)}
		</Button>
	)
}
