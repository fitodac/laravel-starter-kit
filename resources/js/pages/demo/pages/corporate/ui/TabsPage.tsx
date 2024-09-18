import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Tabs')}>
				<p className="font-bold leading-tight">
					Organize Content Seamlessly with Interactive Tabs
				</p>
				<p className="text-sm mt-2">
					Tabs are a powerful UI component that allows users to switch between
					different content sections without leaving the page. By organizing
					information into distinct, clickable sections, tabs improve navigation
					and streamline the user experience. They are ideal for presenting
					related content in a compact, accessible format, helping users explore
					information efficiently.
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
	<Layout {...{ children: page, pageTitle: String(t('Tabs')) }} />
)

export default Page
