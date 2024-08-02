import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	Chips,
	ChipsRadius,
	ChipsVariants,
	ChipsWithContent,
	ChipsDismissible,
	ChipsPressable,
} from '@/pages/demo/componentsDemo'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Chips')}>
				<p className="text-lg font-medium leading-tight">
					A Chip is a small block of essential information representing an
					input, attribute, or action.
				</p>
				<p className="font-light leading-tight mt-2">
					Chips are often used to display content that is dynamic or
					interactive, such as tags, selected items, or categories. They provide
					a compact way to manage or highlight elements in a user interface,
					enhancing the user's experience by visually organizing related data.
				</p>
			</PageHeader>

			<PageContent>
				<div className="space-y-10">
					<Chips />
					<ChipsRadius />
					<ChipsVariants />
					<ChipsWithContent />
					<ChipsDismissible />
					<ChipsPressable />
				</div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Chips')) }} />
)

export default Page
