import {
	Card,
	CardHeader,
	CardBody,
	Select,
	SelectItem,
	Chip,
	cn,
} from '@nextui-org/react'

interface Props {}

const companies = [
	{ key: 'apple', label: 'Apple' },
	{ key: 'google', label: 'Google' },
	{ key: 'microsoft', label: 'Microsoft' },
	{ key: 'amazon', label: 'Amazon' },
	{ key: 'facebook', label: 'Facebook' },
	{ key: 'tesla', label: 'Tesla' },
	{ key: 'netflix', label: 'Netflix' },
	{ key: 'adobe', label: 'Adobe' },
	{ key: 'ibm', label: 'IBM' },
	{ key: 'samsung', label: 'Samsung' },
	{ key: 'intel', label: 'Intel' },
	{ key: 'oracle', label: 'Oracle' },
	{ key: 'cisco', label: 'Cisco' },
]

export const SimpleSelect = ({}: Props) => {
	return (
		<>
			<Card>
				<CardHeader>Simple select</CardHeader>

				<CardBody>
					<div className="grid grid-cols-2 gap-10">
						<div className="space-y-6">
							<fieldset>
								<Select
									items={companies}
									label="Basic selector"
									placeholder="Select a company"
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>

							<fieldset>
								<Select
									items={companies}
									label="Bordered selector"
									variant="bordered"
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>

							<fieldset>
								<Select
									items={companies}
									label="Faded selector"
									variant="faded"
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>

							<fieldset>
								<Select
									items={companies}
									label="Label outside"
									variant="faded"
									labelPlacement="outside"
									classNames={{
										label: cn(
											'absolute left-1 -top-3 -translate-y-3',
											'group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
											'group-data-[filled=true]:-translate-y-3 group-data-[filled=true]:left-1'
										),
									}}
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>
						</div>

						<div className="space-y-6">
							<fieldset>
								<Select
									items={companies}
									label="Multiple selection"
									selectionMode="multiple"
									labelPlacement="outside"
									classNames={{
										label: cn(
											'absolute left-1 -top-3 -translate-y-3',
											'group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
											'group-data-[filled=true]:-translate-y-3 group-data-[filled=true]:left-1'
										),
									}}
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>

							<fieldset>
								<Select
									items={companies}
									label="Multiple selection"
									selectionMode="multiple"
									variant="faded"
									renderValue={(items) => {
										return (
											<div className="flex flex-wrap gap-2">
												{items.map((item) => (
													<Chip key={item.key} color="primary">
														{item.textValue}
													</Chip>
												))}
											</div>
										)
									}}
									classNames={{ value: '[&>div]:h-[28px]' }}
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>

							<fieldset>
								<Select
									items={companies}
									label="Bordered selector"
									variant="bordered"
									selectionMode="multiple"
									description="You can set default values for the select"
									defaultSelectedKeys={['google', 'netflix']}
								>
									{companies.map((company) => (
										<SelectItem key={company.key}>{company.label}</SelectItem>
									))}
								</Select>
							</fieldset>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
