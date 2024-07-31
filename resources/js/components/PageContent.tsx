import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

export const PageContent = ({ children }: Props) => {
	return (
		<>
			<section className="px-5 py-7 md:px-6 md:py-8 lg:px-10">
				{children}
			</section>
		</>
	)
}
