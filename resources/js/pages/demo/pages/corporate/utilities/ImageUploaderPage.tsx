import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { SingleImageUploader } from '@/pages/demo/componentsDemo'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Image uploader')}>
				{/* <p className="text-lg font-medium leading-tight">
					Beautifully designed buttons that enhance visual appeal and usability.
				</p>
				<p className="font-light leading-tight mt-2">
					Each button is intuitive and responsive, providing efficient access to
					key functions. These buttons offer a perfect blend of aesthetics and
					practicality, ensuring a seamless user experience.
				</p> */}
			</PageHeader>

			<PageContent>
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
					<SingleImageUploader />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Image uploader')) }} />
)

export default Page
