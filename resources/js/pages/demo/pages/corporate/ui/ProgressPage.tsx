import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Progress')}>
				<p className="font-bold leading-tight">
					Visualize Task Completion with Dynamic Progress Indicators
				</p>
				<p className="text-sm mt-2">
					Progress indicators are essential UI components that visually
					represent the completion status of a task or process. Whether it’s a
					loading bar, a percentage tracker, or a circular indicator, progress
					components help users understand how much of a task remains. They
					improve user experience by setting clear expectations and reducing
					uncertainty during wait times or multi-step processes.
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

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Progress')) }} />
)

export default Page
