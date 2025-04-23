import { PropsWithChildren } from 'react'
import { CodeBlock } from './CodeBlock'

interface Props extends PropsWithChildren {
	code: string[]
}

export const Row = ({ children, code }: Props) => {
	return (
		<div className="flex w-full px-10 border-b-divider">
			<div className="w-1/2 py-10 flex-1">{children}</div>

			<div className="border-r-divider w-px block mx-10"></div>

			<div className="w-1/2 py-10 shrink-0">
				<CodeBlock lang="tsx">{code.join('\n')}</CodeBlock>
			</div>
		</div>
	)
}
