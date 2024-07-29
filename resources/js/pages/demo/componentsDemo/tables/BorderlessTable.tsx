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

export const BorderlessTable = ({ data }: { data: ProductsProps }) => {
	return (
		<>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="font-semibold">Borderless table</div>
					<p className="text-sm">
						The Borderless Table is a sleek and modern design choice that
						eliminates traditional borders between rows and columns. This style
						creates a seamless and clean presentation, allowing the data to
						stand out without distractions. Ideal for minimalist and
						contemporary interfaces, the Borderless Table emphasizes simplicity
						and elegance, making it perfect for showcasing information in a
						visually appealing and unobtrusive manner.
					</p>
				</div>

				<Table
					removeWrapper
					radius="none"
					aria-label="Table"
					classNames={{
						th: 'bg-transparent text-base [&]:first:rounded-none [&]:last:rounded-none',
						td: 'text-base',
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
