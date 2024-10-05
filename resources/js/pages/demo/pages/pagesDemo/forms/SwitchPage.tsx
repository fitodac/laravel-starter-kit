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

export const SwitchPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	return (
		<>
			<PageHeader
				title={t('Switch')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="font-bold leading-tight">
					Modern switches designed for effortless toggling between options.
				</p>
				<p className="text-sm mt-2">
					Each switch is intuitive and responsive, providing a visual cue for
					quick status changes. These components combine aesthetics with
					functionality, making interactions seamless and satisfying.
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
