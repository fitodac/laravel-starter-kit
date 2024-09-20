import { useCallback } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Pagination,
	Button,
	type SortDescriptor,
	cn,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { router, usePage } from '@inertiajs/react'

import type { PageProps, User, Users } from '@/types'
import type { Permissions, Permission } from '@/types/permissions'

const columns = [
	{ key: 'name', label: t('Name') },
	{ key: 'guard_name', label: t('Guard') },
	{ key: 'actions', label: '' },
] as { key: string; label: string; allowsSorting?: boolean }[]

interface Props {
	setDrawerOpen: (open: boolean) => void
	setSelectedPermission: (selectedPermission: Permission | null) => void
	onOpen: () => void
}

export const PermissionsList = ({
	setDrawerOpen,
	setSelectedPermission,
	onOpen,
}: Props) => {
	const {
		props: { permissions, protected_permissions },
	} = usePage<PageProps>()

	const undeletablePermissions = protected_permissions as string[]

	// const [selectedKeys, setSelectedKeys] = useState(new Set([data.data[3].sku]))
	// const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	// const [isLoading, setIsLoading] = useState(true)

	// const sort = useTableSorting()
	const { links, current_page, data } = permissions as Permissions

	// useEffect(() => {
	// 	if (data.data.length) setIsLoading(false)
	// }, [data])

	const renderCell = useCallback(
		(permission: Permission, columnKey: string) => {
			return {
				name: <span className="font-medium">{permission.name}</span>,
				guard_name: permission.guard_name,
				actions: (
					<div className="flex justify-end">
						<div className="space-x-2">
							{!undeletablePermissions.includes(permission.name) ? (
								<>
									<Button
										size="sm"
										color="danger"
										variant="flat"
										onPress={() => {
											onOpen()
											setSelectedPermission(permission)
										}}
									>
										{t('Delete')}
									</Button>

									<Button
										size="sm"
										color="primary"
										variant="flat"
										onPress={() => {
											setDrawerOpen(true)
											setSelectedPermission(permission)
										}}
									>
										{t('Edit')}
									</Button>
								</>
							) : (
								<Button size="sm" isDisabled>
									{t('Edit')}
								</Button>
							)}
						</div>
					</div>
				),
			}[columnKey]
		},
		[]
	)

	return (
		<>
			{permissions && (
				<Table
					removeWrapper
					aria-label="Table"
					classNames={{
						th: '[&]:first:rounded-none [&]:last:rounded-none',
						td: 'border-t border-content3',
					}}
					bottomContent={
						<div className="flex justify-between items-center">
							{links && (
								<div className="flex w-full justify-end">
									<Pagination
										size="sm"
										isCompact
										showControls
										showShadow
										variant="light"
										color="primary"
										page={current_page}
										total={links.length - 2 || 0}
										classNames={{ wrapper: 'shadow-none' }}
										onChange={(page) =>
											router.reload({
												data: { page },
												only: ['users'],
											})
										}
									/>
								</div>
							)}
						</div>
					}
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
						// loadingContent={<Spinner label={t('loading')} />}
						// isLoading={isLoading}
					>
						{(item: Permission) => (
							<TableRow key={item.id}>
								{(key) => (
									<TableCell>{renderCell(item, String(key))}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			)}
		</>
	)
}
