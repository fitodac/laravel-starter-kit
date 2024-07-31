import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	InputDefault,
	InputLabelOutside,
	SimpleSelect,
	CheckboxDefault,
	RadioButtonsDefault,
	SwitchComponent,
} from '@/pages/demo/componentsDemo'

interface Props {}

export const Page = ({}: Props) => {
	return (
		<>
			<PageHeader title={String(t('Form components'))}>
				<p className="text-lg font-medium leading-tight">
					Form components play a crucial role in UX by providing a structured
					and visually appealing way for users to input and manage data.
				</p>
				<p className="font-light leading-tight mt-2">
					Their thoughtful design enhances beauty and functionality, making
					forms not only attractive but also easy to use. By using clear labels,
					responsive fields, and intuitive controls, these components streamline
					user interactions, ensuring that completing forms is straightforward
					and error-free. Their intuitive layout guides users seamlessly through
					data entry, improving the overall experience and efficiency of
					interacting with the application.
				</p>
			</PageHeader>
			<PageContent>
				<div className="grid grid-cols-2 gap-10">
					<InputDefault />
					<InputLabelOutside />

					<div className="col-span-2">
						<SimpleSelect />
					</div>

					<CheckboxDefault />
					<RadioButtonsDefault />
					<SwitchComponent />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Form components')) }} />
)

export default Page
