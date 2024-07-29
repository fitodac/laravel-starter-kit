import {
	Card,
	CardHeader,
	CardBody,
	Checkbox,
	CheckboxGroup,
	Chip,
	cn,
} from '@nextui-org/react'

interface Props {}

export const CheckboxDefault = ({}: Props) => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Checkbox</CardHeader>
				<CardBody>
					<div className="space-y-6">
						<div className="grid grid-cols-2 gap-5">
							<fieldset>
								<Checkbox>Basic checkbox</Checkbox>
							</fieldset>

							<fieldset>
								<Checkbox defaultSelected>Default checked</Checkbox>
							</fieldset>
						</div>

						<div className="space-y-2">
							<p className="text-sm">Custom</p>

							<Checkbox
								classNames={{
									base: cn(
										'bg-content2 border border-content2 flex gap-2',
										'w-full max-w-[400px] p-4 m-0 rounded-lg',
										'transition-[color,border]',
										'hover:border-primary',
										'data-[selected=true]:border-2',
										'data-[selected=true]:border-primary'
									),
									label: 'w-full',
								}}
							>
								<div className="w-full flex justify-between gap-5">
									<div>
										<p>John doe</p>
										<div className="text-sm text-primary">@jdoe_ok</div>
									</div>
									<div className="flex flex-col items-end">
										<p className="text-sm">Software developer</p>
										<Chip color="success" size="sm" variant="flat">
											Active
										</Chip>
									</div>
								</div>
							</Checkbox>
						</div>

						<div className="">
							<CheckboxGroup
								label="Checkbox group"
								size="sm"
								orientation="horizontal"
								defaultValue={['buenos-aires', 'london']}
							>
								<Checkbox value="buenos-aires">Buenos Aires</Checkbox>
								<Checkbox value="sydney">Sydney</Checkbox>
								<Checkbox value="san-francisco">San Francisco</Checkbox>
								<Checkbox value="london">London</Checkbox>
								<Checkbox value="tokyo">Tokyo</Checkbox>
							</CheckboxGroup>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
