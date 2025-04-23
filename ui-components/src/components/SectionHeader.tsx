import { JSX, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	title: string
	head?: 'h2' | 'h3'
}

export const SectionHeader = ({
	title,
	children,
	head = 'h2',
	...props
}: Props) => {
	const HeadingTag = head as keyof JSX.IntrinsicElements

	return (
		<div className="flex justify-between pt-14 pb-4 px-10 border-b-divider">
			<HeadingTag
				className={`font-light ${'h2' === head ? 'text-5xl' : 'text-xl'}`}
			>
				{title}
			</HeadingTag>
			<div className="">{children}</div>
		</div>
	)
}
