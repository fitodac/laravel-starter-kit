import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	SingleImageUploader,
	MediaManagerImageUpload,
	GalleryMediaManager,
} from '@/pages/demo/componentsDemo'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Image uploader')}>
				<p className="font-medium leading-tight md:text-lg">
					A well-designed image uploaders that enhances user experience and
					functionality.
				</p>
				<p className="text-sm mt-2">
					The uploaders are intuitive and responsive, allowing users to easily
					upload and manage images. It strikes the perfect balance between
					simplicity and performance, ensuring efficient and seamless
					interaction.
				</p>
			</PageHeader>

			<PageContent>
				<div className="grid gap-6 xl:grid-cols-2 lg:gap-10">
					<SingleImageUploader />
					<MediaManagerImageUpload />
					<GalleryMediaManager />
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
