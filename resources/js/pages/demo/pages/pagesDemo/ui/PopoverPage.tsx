import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const PopoverPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Popovers')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Deliver Contextual Information with Engaging Popovers
				</p>
				<p className="text-sm mt-2">
					Popovers are interactive UI components that display additional
					information or actions when users hover or click on an element. They
					are perfect for providing context without overwhelming the interface,
					offering a clean way to display tooltips, details, or options.
					Popovers enhance user engagement by delivering on-demand content in a
					non-intrusive way.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								// { key: 'solidButton', label: 'Solid button' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-14"></div>
			</PageContent>
		</>
	)
}
