import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
} from '@nextui-org/table'
import type { ProductsProps } from '@/pages/demo/types'

const columns = [
	// { key: 'id', label: '#' },
	{ key: 'name', label: 'Name' },
	// { key: 'description', label: 'Description' },
	{ key: 'category', label: 'Category' },
	{ key: 'price', label: 'Price' },
	{ key: 'sku', label: 'SKU' },
	// { key: 'stock', label: 'Stock' },
]

export const BorderedTable = ({ data }: { data: ProductsProps }) => {
	return (
		<>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="font-semibold">Bordered table</div>
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
					removeWrapper
					aria-label="Table"
					radius="none"
					classNames={{
						th: 'bg-content1 border border-content2 text-base [&]:first:rounded-none [&]:last:rounded-none',
						td: 'border border-content2 text-base',
						tbody: 'bg-content1',
					}}
				>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>

					<TableBody items={data.data}>
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
