import { PropsWithChildren, ReactElement } from 'react'
import { cn } from '@nextui-org/react'

interface Props extends PropsWithChildren {
	title: string | ReactElement
}

export const PageHeader = ({ title, children }: Props) => {
	return (
		<div
			className={cn(
				'bg-white w-full px-5 py-7 grid gap-3',
				'sm:grid-cols-2 md:gap-6 md:px-10 md:py-12 xl:gap-20',
				'dark:bg-gray-950/40'
			)}
		>
			{title && (
				<h2 className="text-xl font-semibold select-none md:text-2xl">
					{title}
				</h2>
			)}

			{children && <div>{children}</div>}
		</div>
	)
}
