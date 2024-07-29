import {
	Card,
	CardHeader,
	CardBody,
	RadioGroup,
	Radio,
	cn,
} from '@nextui-org/react'
import { PropsWithChildren } from 'react'

interface Props {}

export const RadioButtonsDefault = ({}: Props) => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Radio group</CardHeader>
				<CardBody>
					<div className="space-y-6">
						<fieldset>
							<RadioGroup
								label="Default radio button group"
								orientation="horizontal"
							>
								<Radio value="buenos-aires">Buenos Aires</Radio>
								<Radio value="sydney">Sydney</Radio>
								<Radio value="san-francisco">San Francisco</Radio>
								<Radio value="london">London</Radio>
								<Radio value="tokyo">Tokyo</Radio>
							</RadioGroup>
						</fieldset>

						<fieldset>
							<RadioGroup
								label="Plans"
								description="Selected plan can be changed at any time."
							>
								<CustomRadio description="Up to 20 items" value="free">
									Free
								</CustomRadio>
								<CustomRadio
									description="Unlimited items. $10 per month."
									value="pro"
								>
									Pro
								</CustomRadio>
								<CustomRadio
									description="24/7 support. Contact us for pricing."
									value="enterprise"
								>
									Enterprise
								</CustomRadio>
							</RadioGroup>
						</fieldset>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

const CustomRadio = (
	props: { description: string; value: string } & PropsWithChildren
) => {
	const { children, ...otherProps } = props

	return (
		<Radio
			{...otherProps}
			classNames={{
				base: cn(
					'bg-content2 border-2 border-transparent',
					'flex w-full max-w-[400px] m-0 items-center justify-between',
					'flex-row-reverse cursor-pointer rounded-lg gap-4 p-4',
					'hover:bg-content2',
					'data-[selected=true]:border-primary'
				),
			}}
		>
			{children}
		</Radio>
	)
}
