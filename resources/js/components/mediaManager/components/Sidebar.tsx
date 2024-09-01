import { cn } from '@nextui-org/react'

export const Sidebar = () => {
	return (
		<aside
			className={cn(
				'border-left-100 border-l w-60 hidden top-0 bottom-0 right-0 absolute',
				'md:block lg:w-72 xl:w-96',
				'dark:border-gray-800'
			)}
		>
			<div className="h-full overflow-auto">
				<div className="text-sm px-6 py-4 pb-24 h-full">Sidebar</div>
			</div>
		</aside>
	)
}
