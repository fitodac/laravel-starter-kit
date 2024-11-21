import { type Dispatch } from 'react'
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import { t } from '@/i18n'

import type { EmailTemplate } from '@/types/notification-templates.d'

interface Props {
	item: EmailTemplate
	key: string
	dispatch: Dispatch<any>
	onOpen: () => void
}

export const NotificationsListCell = ({
	item,
	key,
	dispatch,
	onOpen,
}: Props) => {
	switch (key) {
		case 'id':
			return item.id
		case 'name':
			return <span className="font-semibold">{item.name}</span>
		case 'actions':
			return (
				<div className="flex justify-end">
					<Button
						color="primary"
						size="sm"
						variant="flat"
						onPress={() => {
							dispatch({ type: 'setSelectedNotification', payload: item })
							dispatch({ type: 'openDrawer' })
						}}
					>
						{t('Edit')}
					</Button>
				</div>
			)

		default:
			return null
	}
}
