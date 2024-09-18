import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Toasts')}>
				<p className="font-bold leading-tight">
					Deliver Timely Notifications with Pop-up Toasts
				</p>
				<p className="text-sm mt-2">
					Toasts are transient UI elements that provide brief, non-intrusive
					notifications to users. They appear briefly and automatically
					disappear after a set time, making them ideal for delivering updates,
					success messages, or alerts without interrupting the user’s workflow.
					Toasts enhance user interaction by keeping users informed in a subtle
					yet effective manner.
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
	<Layout {...{ children: page, pageTitle: String(t('Toasts')) }} />
)

export default Page
