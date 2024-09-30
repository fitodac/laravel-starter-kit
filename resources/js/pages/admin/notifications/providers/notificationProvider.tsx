import {
	useReducer,
	type PropsWithChildren,
	type Dispatch,
	createContext,
} from 'react'
import { useDisclosure } from '@nextui-org/react'

import { State, NotificationContextProps } from '@/types/notifications'

const initialState = {
	drawerOpen: false,
	selectedNotification: null,
}

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'openDrawer':
			return { ...state, drawerOpen: true }
		case 'closeDrawer':
			return { ...state, drawerOpen: false }
		case 'setSelectedNotification':
			return { ...state, selectedNotification: action.payload }
		default:
			throw new Error()
	}
}

export const NotificationContext =
	createContext<NotificationContextProps | null>(null)

export const NotificationProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<NotificationContext.Provider
			value={{ state, dispatch, isOpen, onOpen, onOpenChange }}
		>
			{children}
		</NotificationContext.Provider>
	)
}
