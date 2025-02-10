import { router } from '@inertiajs/react'
import type { SortDescriptor } from '@heroui/react'

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
