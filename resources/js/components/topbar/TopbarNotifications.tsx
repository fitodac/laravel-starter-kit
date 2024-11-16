import { usePage } from '@inertiajs/react'
import { PageProps } from '@/types'
import { useEffect } from 'react'

export const TopbarNotifications = () => {
	const { props } = usePage<PageProps>()
	const {
		auth: { user },
	} = props

	if (!user) return null

	useEffect(() => {
		window.Echo.channel('events').listen(
			`App.Models.User.${user.id}`,
			(e: any) => console.log('Notification: ', e)
		)
	}, [])

	return (
		<>
			<i className="ri-notification-2-line" />
		</>
	)
}
