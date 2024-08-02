import { PropsWithChildren } from 'react'
import { cn } from '@nextui-org/react'

interface Props extends PropsWithChildren {
	className?: string
}

export const PageContent = ({ children, className }: Props) => {
	return (
		<>
			<section className={cn('px-5 py-7 md:px-6 md:py-8 lg:px-10', className)}>
				{children}
			</section>
		</>
	)
}
