export interface ProductsProps {
	current_page: number
	data: {
		id: number
		name: string
		description: string
		price: string
		category: string
		sku: string
		stock: string
	}[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string
	to: number
	total: number
}


