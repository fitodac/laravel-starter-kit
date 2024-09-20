import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const LoadingIndicatorsPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Loading indicators')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Keep Users Informed with Seamless Loading Indicators
				</p>
				<p className="text-sm mt-2">
					Loading indicators are crucial UI components that inform users that a
					process is in progress. By displaying spinners, bars, or animations,
					they reduce user frustration during wait times by signaling that
					content is being loaded. These indicators ensure a smoother user
					experience by maintaining engagement and preventing confusion during
					data fetching or background operations.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<ButtonsNavbar
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
