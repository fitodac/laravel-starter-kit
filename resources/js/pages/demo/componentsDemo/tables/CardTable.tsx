import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue,
	Card,
	CardHeader,
	Button,
	Divider,
} from '@nextui-org/react'
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

export const CardTable = ({ data }: { data: ProductsProps }) => {
	return (
		<>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="font-semibold">Card table</div>
					<p className="text-sm">
						The basic table is a simple, minimalist table design without visible
						separations between rows or columns. This clean layout focuses
						solely on the data presented, eliminating visual distractions. It's
						ideal for interfaces where simplicity and clarity are key,
						seamlessly integrating into any design without overwhelming the
						user.
					</p>
				</div>

				<Card>
					<CardHeader className="justify-between">
						<p>Products</p>

						<Button radius="full" color="primary" size="sm" variant="shadow">
							Buy now
						</Button>
					</CardHeader>

					<Table
						removeWrapper
						radius="none"
						aria-label="Table"
						classNames={{
							th: 'bg-transparent [&]:first:rounded-none [&]:last:rounded-none',
							td: 'border-t border-content3',
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
				</Card>
			</div>
		</>
	)
}

export const CardTable2 = ({ data }: { data: ProductsProps }) => {
	return (
		<>
			<div className="space-y-6">
				<div className="space-y-2">
					<div className="font-semibold">Card table</div>
					<p className="text-sm">
						The basic table is a simple, minimalist table design without visible
						separations between rows or columns. This clean layout focuses
						solely on the data presented, eliminating visual distractions. It's
						ideal for interfaces where simplicity and clarity are key,
						seamlessly integrating into any design without overwhelming the
						user.
					</p>
				</div>

				<Card>
					<CardHeader className="justify-between">
						<p>Products</p>

						<Button radius="full" color="primary" size="sm" variant="shadow">
							Buy now
						</Button>
					</CardHeader>

					<Table
						radius="none"
						aria-label="Table"
						classNames={{
							th: '[&]:first:rounded-none [&]:last:rounded-none',
							td: '',
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
				</Card>
			</div>
		</>
	)
}
