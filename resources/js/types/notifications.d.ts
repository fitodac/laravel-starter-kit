import type { Dispatch } from 'react'

export type State = {
	drawerOpen: boolean
	selectedNotification: any
}

export type NotificationContextProps = {
	state: State
	dispatch: Dispatch<any>
	isOpen: boolean
	onOpen: () => void
	onOpenChange: () => void
}
