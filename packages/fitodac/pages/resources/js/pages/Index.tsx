import { usePage } from '@inertiajs/react'
import React from 'react'

interface PageProps {
	page: {
		title: string
		content: string
		featured_image: string | null
		slug: string
	}
}

export default function DynamicPage() {
	const { page } = usePage<any>().props

	return (
		<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			{page.featured_image && (
				<div className="mb-8">
					<img
						src={page.featured_image}
						alt={page.title}
						className="w-full h-96 object-cover rounded-lg shadow-lg"
					/>
				</div>
			)}

			<h1 className="text-4xl font-bold text-gray-900">{page.title}</h1>

			<div
				className="mt-8 prose prose-lg max-w-none"
				dangerouslySetInnerHTML={{ __html: page.content }}
			/>
		</div>
	)
}
