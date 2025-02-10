import { TableContent } from '@/components'
import { useEffect, useState } from 'react'
import { t } from '@/i18n'

import { Filters } from './componentes'

import type { ProductsProps } from '@/pages/demo/types'

export const RealDataTable = ({ data }: { data: ProductsProps }) => {
	const { data: tableData, links, current_page } = data

	const [selectedKeys, setSelectedKeys] = useState(
		new Set(tableData.length > 2 ? ['117', '118'] : [])
	)

	// useEffect(() => console.log(selectedKeys), [selectedKeys])

	return (
		<>
			{/* <Filters /> */}

			<TableContent
				{...{
					reloadOnly: ['products'],
					data: tableData,
					columns: [
						{ key: 'id', label: '#' },
						{ key: 'name', label: 'Name', className: 'w-[550px]' },
						{ key: 'category', label: 'Category', className: 'w-[200px]' },
						{ key: 'price', label: 'Price', className: 'w-[200px]' },
						{ key: 'sku', label: 'SKU', className: 'w-[150px]' },
					],
					links,
					current_page,
					cell: (item: any, key: string) => {
						switch (key) {
							case 'id':
								return <small>{item.id}</small>
							case 'name':
								return item.name
							case 'category':
								return item.category
							case 'price':
								return item.price
							case 'sku':
								return item.sku
						}
					},
					selectionMode: 'multiple',
					allowsSorting: true,
					selectedKeys,
					onSelectionChange: (keys) => setSelectedKeys(keys),
				}}
			/>
		</>
	)
}
