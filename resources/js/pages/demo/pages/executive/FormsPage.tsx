import { Layout } from '@/layouts/admin/executive/Layout'
import {
	InputPage,
	SelectPage,
	TextareaPage,
	CheckboxPage,
	RadioButtonPage,
	SwitchPage,
	SliderPage,
	DatePickerPage,
	FormLayoutsPage,
	TipTapPage,
} from '@/pages/demo/pages/pagesDemo/forms'
import { t } from '@/i18n'

interface Props {
	title?: string
}

export const Page = ({ title }: Props) => {
	switch (title) {
		case 'Input':
			return <InputPage {...{ template: 'executive' }} />
		case 'Select':
			return <SelectPage {...{ template: 'executive' }} />
		case 'Textarea':
			return <TextareaPage {...{ template: 'executive' }} />
		case 'Checkbox':
			return <CheckboxPage {...{ template: 'executive' }} />
		case 'Radio Button':
			return <RadioButtonPage {...{ template: 'executive' }} />
		case 'Switch':
			return <SwitchPage {...{ template: 'executive' }} />
		case 'Slider':
			return <SliderPage {...{ template: 'executive' }} />
		case 'Date Picker':
			return <DatePickerPage {...{ template: 'executive' }} />
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
