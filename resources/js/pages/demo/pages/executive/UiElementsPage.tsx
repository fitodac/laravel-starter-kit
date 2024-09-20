import { Layout } from '@/layouts/admin/executive/Layout'
import {
	AccordionPage,
	AlertsPage,
	AvatarPage,
	BreadcrumbsPage,
	ButtonsPage,
	CardsPage,
	ChipsPage,
	DrawerPage,
	DropdownPage,
	ImagePage,
	ListBoxPage,
	LoadingIndicatorsPage,
	ModalPage,
	PaginationPage,
	PopoverPage,
	ProgressPage,
	TabsPage,
	ToastPage,
	TooltipsPage,
} from '@/pages/demo/pages/pagesDemo/ui'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Accordion':
			return <AccordionPage {...{ template: 'executive' }} />
		case 'Alerts':
			return <AlertsPage {...{ template: 'executive' }} />
		case 'Avatar':
			return <AvatarPage {...{ template: 'executive' }} />
		case 'Breadcrumbs':
			return <BreadcrumbsPage {...{ template: 'executive' }} />
		case 'Buttons':
			return <ButtonsPage {...{ template: 'executive' }} />
		case 'Cards':
			return <CardsPage {...{ template: 'executive' }} />
		case 'Chips':
			return <ChipsPage {...{ template: 'executive' }} />
		case 'Drawer':
			return <DrawerPage {...{ template: 'executive' }} />
		case 'Dropdown':
			return <DropdownPage {...{ template: 'executive' }} />
		case 'Image':
			return <ImagePage {...{ template: 'executive' }} />
		case 'ListBox':
			return <ListBoxPage {...{ template: 'executive' }} />
		case 'Loading indicators':
			return <LoadingIndicatorsPage {...{ template: 'executive' }} />
		case 'Modal':
			return <ModalPage {...{ template: 'executive' }} />
		case 'Pagination':
			return <PaginationPage {...{ template: 'executive' }} />
		case 'Popovers':
			return <PopoverPage {...{ template: 'executive' }} />
		case 'Progress':
			return <ProgressPage {...{ template: 'executive' }} />
		case 'Tabs':
			return <TabsPage {...{ template: 'executive' }} />
		case 'Toasts':
			return <ToastPage {...{ template: 'executive' }} />
		case 'Tooltips':
			return <TooltipsPage {...{ template: 'executive' }} />
		default:
			return null
	}
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t(page.props.title)) }} />
)

export default Page
