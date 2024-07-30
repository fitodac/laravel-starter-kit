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
import { router } from '@inertiajs/react'

import type { ProductsProps } from '@/pages/demo/types'

const columns = [
	// { key: 'id', label: '#' },
	{ key: 'name', label: 'Name', width: 550 },
	// { key: 'description', label: 'Description' },
	{ key: 'category', label: 'Category', width: 200 },
	{ key: 'price', label: 'Price', width: 200 },
	{ key: 'sku', label: 'SKU', width: 150 },
	// { key: 'stock', label: 'Stock' },
]

export const BasicTable = ({ data }: { data: ProductsProps }) => {
	const [selectedKeys, setSelectedKeys] = useState(new Set([data.data[3].sku]))
	const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({})
	const [isLoading, setIsLoading] = useState(true)

	const sort = useTableSorting()
	const { links, current_page } = data

	useEffect(() => {
		if (data.data.length) setIsLoading(false)
	}, [data])

	return (
		<>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="font-semibold">Basic table</div>
					<p className="text-sm">
						The basic table is a simple, minimalist table design without visible
						separations between rows or columns. This clean layout focuses
						solely on the data presented, eliminating visual distractions. It's
						ideal for interfaces where simplicity and clarity are key,
						seamlessly integrating into any design without overwhelming the
						user.
					</p>
				</div>

				<Table
					isStriped
					radius="none"
					shadow="none"
					aria-label="Table"
					color="primary"
					selectionMode="multiple"
					selectedKeys={selectedKeys}
					// @ts-ignore
					onSelectionChange={setSelectedKeys}
					onSortChange={(sortDescriptor) => {
						const sd = sort({ sortDescriptor, only: ['products'] })
						setSortDescriptor(sd)
						setIsLoading(true)
					}}
					sortDescriptor={sortDescriptor}
					bottomContent={
						links && (
							<div className="flex w-full justify-end">
								<Pagination
									size="sm"
									isCompact
									showControls
									variant="light"
									color="primary"
									page={current_page}
									total={links.length - 2 || 0}
									onChange={(page) =>
										router.reload({ data: { page }, only: ['products'] })
									}
								/>
							</div>
						)
					}
					classNames={{
						th: 'text-base [&]:first:rounded-none [&]:last:rounded-none [&]:first:before:!rounded-none [&]:last:before:!rounded-none',
						td: 'text-base [&]:first:rounded-none [&]:last:rounded-none [&]:first:before:!rounded-none [&]:last:before:!rounded-none',
						tbody: 'rounded-none',
					}}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key} allowsSorting width={column.width}>
								{column.label}
							</TableColumn>
						)}
					</TableHeader>

					<TableBody
						items={data.data}
						loadingContent={<Spinner label={t('loading')} />}
						isLoading={isLoading}
					>
						{(item) => (
							<TableRow key={item.sku}>
								{(key) => <TableCell>{getKeyValue(item, key)}</TableCell>}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</>
	)
}
