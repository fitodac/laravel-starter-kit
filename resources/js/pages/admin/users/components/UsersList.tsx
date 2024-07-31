import { useEffect, useState } from 'react'
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
	Spinner,
	type SortDescriptor,
	Pagination,
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'
import { t } from '@/i18n'
import { router, usePage } from '@inertiajs/react'
import type { User } from '@/types'

const columns = [
	{ key: 'id', label: '#' },
	{ key: 'username', label: 'Username' },
	{ key: 'name', label: 'Name' },
	// { key: 'description', label: 'Description' },
	// { key: 'category', label: 'Category', width: 200 },
	// { key: 'price', label: 'Price', width: 200 },
	// { key: 'sku', label: 'SKU', width: 150 },
	// { key: 'stock', label: 'Stock' },
]

export const UsersList = () => {
	const { props } = usePage()

	const { users } = props

	console.log(users.data)
	// const [selectedKeys, setSelectedKeys] = useState(new Set([data.data[3].sku]))
	// const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	// const [isLoading, setIsLoading] = useState(true)

	// const sort = useTableSorting()
	// const { links, current_page } = data

	// useEffect(() => {
	// 	if (data.data.length) setIsLoading(false)
	// }, [data])

	return (
		<>
			{users && (
				<Table
					removeWrapper
					aria-label="Table"
					classNames={{
						th: '[&]:first:rounded-none [&]:last:rounded-none',
						td: 'border-t border-content3',
					}}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn
								key={column.key}
								allowsSorting
								// width={column.width ?? 1}
							>
								{column.label}
							</TableColumn>
						)}
					</TableHeader>

					<TableBody
						items={users.data}
						// loadingContent={<Spinner label={t('loading')} />}
						// isLoading={isLoading}
					>
						{(item: User) => (
							<TableRow key={item.id}>
								{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
							</TableRow>
						)}
					</TableBody>
				</Table>
			)}
		</>

		// <>
		// 		<div className="space-y-6">
		// 			<div className="space-y-2">
		// 				<div className="font-semibold">Basic table</div>
		// 				<p className="text-sm">
		// 					The basic table is a simple, minimalist table design without visible
		// 					separations between rows or columns. This clean layout focuses
		// 					solely on the data presented, eliminating visual distractions. It's
		// 					ideal for interfaces where simplicity and clarity are key,
		// 					seamlessly integrating into any design without overwhelming the
		// 					user.
		// 				</p>
		// 			</div>

		// 			<Table
		// 				isStriped
		// 				radius="none"
		// 				shadow="none"
		// 				aria-label="Table"
		// 				color="primary"
		// 				selectionMode="multiple"
		// 				selectedKeys={selectedKeys}
		// 				// @ts-ignore
		// 				onSelectionChange={setSelectedKeys}
		// 				onSortChange={(sortDescriptor) => {
		// 					const sd = sort({ sortDescriptor, only: ['products'] })
		// 					setSortDescriptor(sd)
		// 					setIsLoading(true)
		// 				}}
		// 				sortDescriptor={sortDescriptor}
		// 				bottomContent={
		// 					links && (
		// 						<div className="flex w-full justify-end">
		// 							<Pagination
		// 								size="sm"
		// 								isCompact
		// 								showControls
		// 								showShadow
		// 								variant="light"
		// 								color="primary"
		// 								page={current_page}
		// 								total={links.length - 2 || 0}
		// 								classNames={{ wrapper: 'shadow-none' }}
		// 								onChange={(page) =>
		// 									router.reload({ data: { page }, only: ['products'] })
		// 								}
		// 							/>
		// 						</div>
		// 					)
		// 				}
		// 				classNames={{
		// 					th: 'text-base [&]:first:rounded-none [&]:last:rounded-none [&]:first:before:!rounded-none [&]:last:before:!rounded-none',
		// 					td: 'text-base [&]:first:rounded-none [&]:last:rounded-none [&]:first:before:!rounded-none [&]:last:before:!rounded-none',
		// 					tbody: 'rounded-none',
		// 				}}
		// 			>
		// 				<TableHeader columns={columns}>
		// 					{(column) => (
		// 						<TableColumn key={column.key} allowsSorting width={column.width}>
		// 							{column.label}
		// 						</TableColumn>
		// 					)}
		// 				</TableHeader>

		// 				<TableBody
		// 					items={data.data}
		// 					loadingContent={<Spinner label={t('loading')} />}
		// 					isLoading={isLoading}
		// 				>
		// 					{(item) => (
		// 						<TableRow key={item.sku}>
		// 							{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
		// 						</TableRow>
		// 					)}
		// 				</TableBody>
		// 			</Table>
		// 		</div>
		// </>
	)
}
