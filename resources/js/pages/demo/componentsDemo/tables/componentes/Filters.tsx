import { createContext, useContext, useState } from 'react'
import { Button, Input, Select, SelectItem } from '@heroui/react'
import { t } from '@/i18n'
import { usePage, router } from '@inertiajs/react'

import type { PageProps } from '@/types'

// Context for managing filter state across components
const FilterContext = createContext({
	filters: { s: '', cat: '' },
	setFilters: (e: any) => {},
})

// Component that handles filtering functionality for products table
export const Filters = () => {
	const { props } = usePage<PageProps>()
	
	const [filters, setFilters] = useState({
		s: props?.s ?? '',
		cat: props?.cat ?? '',
	})

	// Handles clearing all filter values and reloading the table data
	const handleClear = () => {
		setFilters({ s: '', cat: '' })

		router.reload({
			data: { cat: null, s: null },
			only: ['products', 'cat', 's'],
		})
	}

	return (
		<FilterContext.Provider value={{ filters, setFilters }}>
			<div className="flex justify-end gap-5">
				<div className="flex items-end">
					{(filters.s.lenght > 3 || filters.cat.length > 0) && (
						<Button
							color="primary"
							variant="light"
							size="sm"
							startContent={<i className="ri-equalizer-2-line" />}
							isDisabled={!filters.cat && !filters.s ? true : false}
							onPress={() => handleClear()}
						>
							<span className="text-sm">{t('Clear filters')}</span>
						</Button>
					)}
				</div>

				<CategorySelector />
				<InputSearch />
			</div>
		</FilterContext.Provider>
	)
}

// Component that handles search input functionality
const InputSearch = () => {
	const { filters, setFilters } = useContext(FilterContext)

	// Handle search input changes and trigger data reload when criteria is met
	const handleSearch = (val: string | null) => {
		setFilters((prev: any) => ({ ...prev, s: val ?? '' }))

		if (!val) {
			router.reload({
				data: { s: null },
				only: ['products', 's'],
			})
		} else if (val.length > 3) {
			router.reload({
				data: { s: val },
				only: ['products', 's'],
			})
		}
	}

	return (
		<Input
			label={t('Search')}
			size="sm"
			labelPlacement="outside"
			value={filters.s}
			startContent={<></>}
			endContent={
				<div className="flex gap-2 items-center">
					<i className="ri-search-line" />
				</div>
			}
			onValueChange={handleSearch}
			className="md:w-60"
		/>
	)
}

// Handles category filter changes and triggers table data reload
const filterCategory = (val: string | null) => {
	if (!val) {
		router.reload({
			data: { cat: null },
			only: ['products', 'cat'],
		})
	} else {
		router.reload({
			data: { cat: val },
			only: ['products', 'cat'],
		})
	}
}

// Component that handles category selection and filtering
const CategorySelector = () => {
	const { props } = usePage<PageProps>()
	const { categories } = props
	const { filters, setFilters } = useContext(FilterContext)

	// Handle category selection and trigger filter updates
	const handleFilter = (val: string | null) => {
		setFilters((prev: any) => ({ ...prev, cat: val ?? '' }))
		filterCategory(val)
	}

	return (
		<Select
			items={categories}
			label="Category"
			size="sm"
			labelPlacement="outside"
			startContent={<></>}
			selectedKeys={new Set([filters.cat])}
			className="md:w-60"
			onSelectionChange={(e) => handleFilter(e.currentKey ?? '')}
		>
			{categories.map((e: any) => (
				<SelectItem key={e.category}>{e.category}</SelectItem>
			))}
		</Select>
	)
}
