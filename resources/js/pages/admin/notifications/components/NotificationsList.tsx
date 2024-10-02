import { useContext } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	type SortDescriptor,
	Spinner,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { usePage } from '@inertiajs/react'
import { NotificationsListCell, NotificationsListPager } from './list'
import { DeleteNotification } from './DeleteNotification'
import { NotificationContext } from '../providers/NotificationProvider'

import type { PageProps } from '@/types'
import type {
	Notification,
	NotificationsTable,
	NotificationContextProps,
} from '@/types/notifications'

export const NotificationsList = () => {
	const {
		props: { notifications },
	} = usePage<PageProps>()

	const { links, current_page, data } = notifications as NotificationsTable

	const { onOpen, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	// const [selectedKeys, setSelectedKeys] = useState(new Set([data.data[3].sku]))
	// const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	// const [isLoading, setIsLoading] = useState(true)

	// const sort = useTableSorting()

	// useEffect(() => {
	// 	if (data.data.length) setIsLoading(false)
	// }, [data])

	return (
		<>
			<Table
				removeWrapper
				aria-label="Table"
				classNames={{
					th: '[&]:first:rounded-none [&]:last:rounded-none [&]:last:text-right',
					td: 'border-t border-content3',
				}}
				bottomContent={<NotificationsListPager {...{ links, current_page }} />}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn
							key={column.key}
							allowsSorting={column.allowsSorting ?? false}
							width={column.width ?? null}
						>
							{column.label}
						</TableColumn>
					)}
				</TableHeader>

				<TableBody
					items={data}
					loadingContent={<Spinner label={t('loading').toString()} />}
					// isLoading={isLoading}
				>
					{(item: Notification) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{NotificationsListCell({
										...{ item, key: String(key), dispatch, onOpen },
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<DeleteNotification />
		</>
	)
}

const columns = [
	{ key: 'id', label: '#' },
	{ key: 'title', label: t('title') },
	{ key: 'body', label: t('Body'), width: 500 },
	{ key: 'created_at', label: t('Date') },
	{ key: 'actions', label: t('Actions') },
] as {
	key: string
	label: string
	allowsSorting?: boolean
	width: number | null
}[]
