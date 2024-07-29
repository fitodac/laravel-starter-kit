import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	VerticalFormLayout,
	HorizontalFormLayout,
	TwoColumnsFormLayout,
	GroupedFormLayout,
	ClassicFormLayout,
	ComfortableFormLayout,
	CompactFormLayout,
} from '@/pages/demo/componentsDemo'

interface Props {}

export const Page = ({}: Props) => {
	return (
		<>
			<PageHeader title={t('Form Layouts')}>
				<p className="text-lg font-medium leading-tight">
					Forms are essential components of a dashboard, enabling users to
					manage data efficiently within a maximum content width.
				</p>
				<p className="font-light leading-tight mt-2">
					Their design maximizes space usage and ensures that interactions are
					straightforward and effective, enhancing the overall user experience
					by keeping data entry and management streamlined and accessible.
				</p>
			</PageHeader>

			<PageContent>
				<div className="space-y-10">
					<VerticalFormLayout />
					<ClassicFormLayout />

					<div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
						<HorizontalFormLayout />
						<div className="lg:col-span-2">
							<TwoColumnsFormLayout />
						</div>
					</div>

					<GroupedFormLayout />

					<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
						<ComfortableFormLayout />
						<CompactFormLayout />
					</div>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: t('Form layouts') }} />
)

export default Page
