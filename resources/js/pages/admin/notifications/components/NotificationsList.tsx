import { useContext } from 'react'
import { Button, Divider, cn } from '@nextui-org/react'
import { t } from '@/i18n'
import { NotificationContext } from '../providers/notificationProvider'

import { NotificationContextProps } from '@/types/notifications'

interface Props {}

export const NotificationsList = ({}: Props) => {
	const { state, dispatch, onOpen } = useContext(
		NotificationContext
	) as NotificationContextProps

	return <>Aún no hay notificaciones</>
}
