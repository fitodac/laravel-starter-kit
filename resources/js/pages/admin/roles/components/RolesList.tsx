import { useCallback, useEffect, useState } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Pagination,
	Button,
	Badge,
	type SortDescriptor,
	Chip,
	cn,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { Link, router, usePage } from '@inertiajs/react'

import type { PageProps, User, Users } from '@/types'
import type { Roles, Role } from '@/types/roles'

const columns = [
	{ key: 'id', label: '#' },
	{ key: 'name', label: t('Name') },
	{ key: 'guard_name', label: t('Guard') },
	{ key: 'permissions', label: t('Permissions') },
	{ key: 'users_count', label: t('Associated users') },
	{ key: 'actions', label: '' },
] as { key: string; label: string; allowsSorting?: boolean }[]

export const RolesList = () => {
	const {
		props: { roles },
	} = usePage<PageProps>()

	const { links, current_page, data } = roles as Roles

	// const [selectedKeys, setSelectedKeys] = useState(new Set([data.data[3].sku]))
	// const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	// const [isLoading, setIsLoading] = useState(true)

	// const sort = useTableSorting()

	// useEffect(() => {
	// 	if (data.data.length) setIsLoading(false)
	// }, [data])

	const renderCell = useCallback((role: Role, columnKey: string) => {
		return {
			id: <>{role.id}</>,
			name: <span className="font-medium">{role.name}</span>,
			guard_name: role.guard_name,
			actions: (
				<div className="flex justify-end">
					<div className="space-x-2">
						<>
							<Button
								size="sm"
								color="primary"
								variant="flat"
								as={Link}
								href={route('dashboard.role.edit', { role })}
							>
								{t('Edit')}
							</Button>
						</>
					</div>
				</div>
			),
			permissions: (
				<div className="flex gap-2">
					{role.permissions.map((permission) => (
						<Chip key={permission.id} size="sm" color="primary">
							{permission.name}
						</Chip>
					))}
				</div>
			),
			users_count: role.users_count,
		}[columnKey]
	}, [])

	return (
		<>
			{roles && (
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
												only: ['roles'],
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
						{(item: Role) => (
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
