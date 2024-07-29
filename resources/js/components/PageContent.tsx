import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {}

export const PageContent = ({ children }: Props) => {
	return (
		<>
			<section className="px-5 py-7 md:px-10 md:py-8">{children}</section>
		</>
	)
}
