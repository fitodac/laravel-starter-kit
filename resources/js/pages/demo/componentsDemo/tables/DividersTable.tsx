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

export const DividersTable = ({ data }: { data: ProductsProps }) => {
	return (
		<>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="font-semibold">Dividers</div>
					<p className="text-sm">
						Clear separations between rows and columns, enhancing the
						organization and readability of the data. These dividers provide a
						structured layout, making it easier for users to distinguish between
						different data points and navigate through the information. This
						design is particularly useful in data-heavy interfaces, where
						clarity and ease of interpretation are crucial. The dividers not
						only add a visual hierarchy but also contribute to a more polished
						and professional appearance.
					</p>
				</div>

				<Table
					removeWrapper
					radius="none"
					aria-label="Table"
					classNames={{
						th: 'bg-transparent text-base [&]:first:rounded-none [&]:last:rounded-none',
						td: 'text-base border-t border-content3',
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
