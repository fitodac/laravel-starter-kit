import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const LoadingIndicatorsPage = () => {
	return (
		<>
			<PageHeader title={t('Loading indicators')}>
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
