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
import { PermissionsListCell, PermissionsListPager } from './list'
import { DeletePermission } from './DeletePermission'
import { PermissionContext } from '../providers/PermissionProvider'

import type { PageProps } from '@/types'
import type {
	Permissions,
	Permission,
	PermissionContextProps,
} from '@/types/permissions'

export const PermissionsList = () => {
	const {
		props: { permissions, protected_permissions },
	} = usePage<PageProps>()

	const { links, current_page, data } = permissions as Permissions
	const undeletablePermissions = protected_permissions as string[]

	const { onOpen, dispatch } = useContext(
		PermissionContext
	) as PermissionContextProps

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
					th: '[&]:first:rounded-none [&]:last:rounded-none',
					td: 'border-t border-content3',
				}}
				bottomContent={<PermissionsListPager {...{ links, current_page }} />}
			>
				<TableHeader columns={columns}>
					{(column) => (
						<TableColumn
							key={column.key}
							allowsSorting={column.allowsSorting ?? false}
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
					{(item: Permission) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{PermissionsListCell({
										...{
											item,
											key: String(key),
											dispatch,
											onOpen,
											protected_permissions: undeletablePermissions,
										},
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<DeletePermission />
		</>
	)
}

const columns = [
	{ key: 'name', label: t('Name') },
	{ key: 'guard_name', label: t('Guard') },
	{ key: 'actions', label: '' },
] as {
	key: string
	label: string
	allowsSorting?: boolean
	width: number | null
}[]
