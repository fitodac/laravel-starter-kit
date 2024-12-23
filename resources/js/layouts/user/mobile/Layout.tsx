import { type PropsWithChildren } from 'react'
import { Head } from '@inertiajs/react'
import { MenuMobile } from './components'
import { cn } from '@nextui-org/react'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const LayoutMobile = ({ children, pageTitle }: Props) => {
	return (
		<>
			<Head title={pageTitle} />

			<main className="min-h-screen flex justify-center">
				<div className="flex-1 h-screen max-w-md relative overflow-hidden">
					<div
						className={cn(
							'h-full',
							// 'scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100',
							'overflow-y-scroll'
						)}
					>
						{children}
					</div>

					<MenuMobile />
				</div>
			</main>
		</>
	)
}
