import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	SolidButton,
	ButtonSize,
	ButtonVariants,
	LightButton,
	LoadingButton,
	IconizedButtons,
	ButtonVariantsRounded,
	GroupedButtons,
} from '@/pages/demo/componentsDemo'
import { ButtonsNavbar } from './components'

export const ButtonsPage = () => {
	return (
		<>
			<PageHeader title={t('Buttons')}>
				<p className="font-bold leading-tight">
					Beautifully designed buttons that enhance visual appeal and usability.
				</p>
				<p className="text-sm mt-2">
					Each button is intuitive and responsive, providing efficient access to
					key functions. These buttons offer a perfect blend of aesthetics and
					practicality, ensuring a seamless user experience.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ButtonsNavbar
						{...{
							menu: [
								{ key: 'solidButton', label: 'Solid button' },
								{ key: 'smallButtons', label: 'Small' },
								{ key: 'largeButtons', label: 'Large' },
								{ key: 'variants', label: 'Variants' },
								{ key: 'lightButton', label: 'Light button' },
								{ key: 'loadingState', label: 'Loading state' },
								{ key: 'icons', label: 'Icons' },
								{ key: 'roundedVariants', label: 'Rounded variants' },
								{ key: 'buttonGroup', label: 'Button group' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-14">
					<SolidButton />
					<ButtonSize title="Small buttons" />
					<ButtonSize title="Large buttons" size="lg" />
					<ButtonVariants />
					<LightButton />
					<LoadingButton />
					<IconizedButtons />
					<ButtonVariantsRounded />
					<GroupedButtons />
				</div>
			</PageContent>
		</>
	)
}
