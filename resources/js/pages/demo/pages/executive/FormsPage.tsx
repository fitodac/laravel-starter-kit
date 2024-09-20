import { Layout } from '@/layouts/admin/executive/Layout'
import {
	FormComponentsPage,
	FormLayoutsPage,
	TipTapPage,
} from '@/pages/demo/pages/pagesDemo/forms'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Form components':
			return <FormComponentsPage {...{ template: 'executive' }} />
		case 'Form layouts':
			return <FormLayoutsPage {...{ template: 'executive' }} />
		case 'Wysiwyg':
			return <TipTapPage {...{ template: 'executive' }} />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
