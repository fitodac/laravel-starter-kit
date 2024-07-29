import { router } from '@inertiajs/react'
import { Key } from 'react'
import type { SortDescriptor } from '@nextui-org/react'

export const useTableSorting = () => {
	const sort = ({
		sortDescriptor,
		only = [],
	}: {
		sortDescriptor: SortDescriptor
		only?: string[]
	}) => {
		router.reload({
			data: {
				order: sortDescriptor.column,
				dir: sortDescriptor.direction,
			},
			only,
		})

		return { ...sortDescriptor }
	}

	return sort
}
