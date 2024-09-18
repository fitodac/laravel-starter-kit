import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Popovers')}>
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
	<Layout {...{ children: page, pageTitle: String(t('Popovers')) }} />
)

export default Page
