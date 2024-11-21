import { type Dispatch } from 'react'
import { Button } from '@nextui-org/react'
import dayjs from 'dayjs'
import { t } from '@/i18n'
import { toast } from 'react-toastify'

import type { Notification } from '@/types/notifications'
import { router } from '@inertiajs/react'

interface Props {
	item: Notification
	key: string
	dispatch: Dispatch<any>
}

export const NotificationsListCell = ({ item, key, dispatch }: Props) => {
	switch (key) {
		case 'notification':
			return (
				<div className="flex gap-10">
					<div className="flex-1 space-y-1">
						<h4 className="font-semibold">{item.data.title}</h4>
						<div className="text-xs">{item.data.content}</div>
						<div className="text-foreground-500 text-xs flex gap-10">
							<span>#{item.id}</span>
							<span>
								<i className="ri-calendar-line ri-sm"></i>{' '}
								{dayjs(item.created_at).format('YYYY-MM-DD')}
							</span>
						</div>
					</div>
					<div className="">
						<Button
							size="sm"
							color="primary"
							variant="flat"
							onPress={() => {
								router.post(route('notification.markAsRead', { id: item.id }), {
									// @ts-ignore
									onSuccess: (resp: InertiaResponse) => {
										if (resp.props.flash && resp.props.flash.success) {
											toast.success(t(resp.props.flash.success))
										}
									},
								})
							}}
						>
							{t('Mark as read')}
						</Button>
					</div>
				</div>
			)

		default:
			return null
	}
}
