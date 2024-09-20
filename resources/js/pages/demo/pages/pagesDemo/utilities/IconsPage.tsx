import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const IconsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Icons')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Enhance User Experience with Intuitive Icons
				</p>
				<p className="text-sm mt-2">
					Icons are visual elements that simplify communication by representing
					actions, objects, or ideas in a compact and easily recognizable way.
					They enhance the user interface by providing quick, intuitive cues,
					improving navigation, and reducing text clutter. Icons play a crucial
					role in making applications more user-friendly, visually appealing,
					and efficient.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<ul>
						<li>Solid button</li>
						<li>Small button</li>
						<li>Large button</li>
					</ul>
				}
			>
				<div className="flex-1 max-w-xl space-y-14"></div>
			</PageContent>
		</>
	)
}
