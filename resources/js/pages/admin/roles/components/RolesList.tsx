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
import { RolesListCell, RolesListPager } from './list'
import { DeleteRole } from './DeleteRole'
import { RoleContext } from '../providers/RoleProvider'

import type { PageProps } from '@/types'
import type { Roles, Role, RoleContextProps } from '@/types/roles'

export const RolesList = () => {
	const {
		props: { roles, protected_roles },
	} = usePage<PageProps>()

	const { links, current_page, data } = roles as Roles
	const undeletableRoles = protected_roles as string[]

	const { onOpen, dispatch } = useContext(RoleContext) as RoleContextProps

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
				bottomContent={<RolesListPager {...{ links, current_page }} />}
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
					{(item: Role) => (
						<TableRow key={item.id}>
							{(key) => (
								<TableCell>
									{RolesListCell({
										...{
											item,
											key: String(key),
											dispatch,
											onOpen,
											protected_roles: undeletableRoles,
										},
									})}
								</TableCell>
							)}
						</TableRow>
					)}
				</TableBody>
			</Table>

			<DeleteRole />
		</>
	)
}

const columns = [
	{ key: 'id', label: '#' },
	{ key: 'name', label: t('Name') },
	{ key: 'guard_name', label: t('Guard') },
	{ key: 'permissions', label: t('Permissions') },
	{ key: 'users_count', label: t('Associated users') },
	{ key: 'actions', label: '' },
] as { key: string; label: string; allowsSorting?: boolean }[]
