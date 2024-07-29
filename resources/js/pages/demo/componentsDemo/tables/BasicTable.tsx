import { useCallback, useState } from 'react'
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
} from '@nextui-org/react'
import { useTableSorting } from '@/hooks'

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
					// @ts-ignore3xcels1or
					
					onSelectionChange={setSelectedKeys}
					onSortChange={(sortDescriptor) => {
						const sd = sort({ sortDescriptor, only: ['products'] })
						setSortDescriptor(sd)
					}}
					sortDescriptor={sortDescriptor}
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
						loadingContent={<Spinner label="Loading..." />}
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
