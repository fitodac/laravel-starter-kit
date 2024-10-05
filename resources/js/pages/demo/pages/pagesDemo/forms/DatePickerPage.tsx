import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	BasicInput,
	ClassicInput,
	InputSizes,
	InputRounded,
	InputRequired,
	InputValidationStyles,
	InputWithAccessories,
	HorizontalInput,
	PasswordInput,
} from '@/pages/demo/componentsDemo'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

interface Props {
	template?: Template
}

export const DatePickerPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Date Picker')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Elegant date pickers that make selecting dates intuitive and easy.
				</p>
				<p className="text-sm mt-2">
					Each date picker is highly responsive, providing a visually appealing
					and straightforward way to select dates. These components merge style
					and practicality, simplifying calendar-based interactions.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								{ key: 'basicInput', label: 'Basic input' },
								{ key: 'classicInput', label: 'Classic style' },
								{ key: 'inputSizes', label: 'Sizing' },
								{ key: 'inputRounded', label: 'Border radius' },
								{ key: 'inputRequired', label: 'Required' },
								{ key: 'validationStyles', label: 'Validation styles' },
								{ key: 'inputWithAccessories', label: 'Accessories' },
								{ key: 'horizontalInput', label: 'Horizontal input' },
								{ key: 'passwordInput', label: 'Password input' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-2xl space-y-28">
					<BasicInput />
					<ClassicInput />
					<InputSizes />
					<InputRounded />
					<InputRequired />
					<InputValidationStyles />
					<InputWithAccessories />
					<HorizontalInput />
					<PasswordInput />
				</div>
			</PageContent>
		</>
	)
}
