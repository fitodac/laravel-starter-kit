import { useState } from 'react'
import { t } from '@/i18n'
import {
	Card,
	CardHeader,
	CardBody,
	Input,
	Select,
	SelectItem,
	SelectSection,
} from '@nextui-org/react'
import { ClassicInput } from '@/components/form'

type VariantsProps = {
	variant?: 'bordered' | 'faded' | 'underlined' | 'flat'
	radius?: 'full' | 'sm' | 'md' | 'lg' | 'none'
	label: string
	description: string
}[]

const variants = [
	{ variant: 'flat' }, // Basic
	{ variant: 'flat', radius: 'none' }, // Sharp
	{ variant: 'flat', radius: 'sm' }, // Small radius
	{ variant: 'flat', radius: 'lg' }, // Large radius
	{ variant: 'flat', radius: 'full' }, // Rounded

	{ variant: 'bordered' }, // Bordered
	{ variant: 'bordered', radius: 'none' }, // Bordered sharp
	{ variant: 'bordered', radius: 'sm' }, // Bordered small radius
	{ variant: 'bordered', radius: 'lg' }, // Bordered large radius
	{ variant: 'bordered', radius: 'full' }, // Bordered rounded

	{ variant: 'faded' }, // Faded
	{ variant: 'faded', radius: 'none' }, // Faded sharp
	{ variant: 'faded', radius: 'sm' }, // Faded small radius
	{ variant: 'faded', radius: 'lg' }, // Faded large radius
	{ variant: 'faded', radius: 'full' }, // Faded rounded

	{ variant: 'underlined', radius: 'full' }, // Underlined
] as VariantsProps

export const InputDefault = () => {
	const [props, setProps] = useState(variants[0])

	return (
		<>
			<Card shadow="none">
				<CardHeader>
					<div className="flex justify-between w-full">
						<div className="flex-1">{t('Input default')}</div>

						<div className="flex-1 flex justify-end">
							<Select
								fullWidth
								items={variants}
								className="w-72"
								label={t('Select')}
								labelPlacement="outside-left"
								disallowEmptySelection
								defaultSelectedKeys={[0]}
								aria-labelledby="Input variants"
								onSelectionChange={(e) => {
									if (e.currentKey) {
										setProps(variants[Number(e.currentKey)])
									}
								}}
							>
								<SelectSection showDivider title="Flat">
									<SelectItem key={0}>Basic</SelectItem>
									<SelectItem key={1}>Sharp</SelectItem>
									<SelectItem key={2}>Small radius</SelectItem>
									<SelectItem key={3}>Large radius</SelectItem>
									<SelectItem key={4}>Rounded</SelectItem>
								</SelectSection>
								<SelectSection showDivider title="Bordered">
									<SelectItem key={5}>Bordered</SelectItem>
									<SelectItem key={6}>Bordered Sharp</SelectItem>
									<SelectItem key={7}>Bordered small radius</SelectItem>
									<SelectItem key={8}>Bordered large radius</SelectItem>
									<SelectItem key={9}>Bordered rounded</SelectItem>
								</SelectSection>
								<SelectSection showDivider title="Faded">
									<SelectItem key={10}>Faded</SelectItem>
									<SelectItem key={11}>Faded Sharp</SelectItem>
									<SelectItem key={12}>Faded small radius</SelectItem>
									<SelectItem key={13}>Faded large radius</SelectItem>
									<SelectItem key={14}>Faded rounded</SelectItem>
								</SelectSection>
								<SelectSection title="Underlined">
									<SelectItem key={15}>Underlined</SelectItem>
								</SelectSection>
							</Select>
						</div>
					</div>
				</CardHeader>

				<CardBody className="pt-0 pb-10">
					<div className="grid grid-cols-3 gap-8">
						<div className="space-y-6">
							<fieldset>
								<Input
									label="Basic"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
								/>
							</fieldset>

							<fieldset>
								<Input
									size="sm"
									label="Small"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
								/>
							</fieldset>

							<fieldset>
								<Input
									size="lg"
									label="Large"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
								/>
							</fieldset>

							<fieldset>
								<ClassicInput
									label="Classic input"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
								/>
							</fieldset>

							<fieldset>
								<ClassicInput
									size="sm"
									label="Classic input small"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
								/>
							</fieldset>

							<fieldset>
								<ClassicInput
									size="lg"
									variant={props.variant}
									radius={props.radius}
									label="Classic input large"
									description="The most basic style"
								/>
							</fieldset>
						</div>

						{/* Start / end content */}
						<div className="space-y-6">
							<fieldset>
								<Input
									label="With a left icon"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
									startContent={<i className="ri-instagram-line ri-lg" />}
								/>
							</fieldset>

							<fieldset>
								<Input
									label="With a right icon"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
									endContent={<i className="ri-shield-check-line ri-lg" />}
								/>
							</fieldset>

							<fieldset>
								<ClassicInput
									label="Classic input with left icon"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
									startContent={<i className="ri-user-6-fill ri-lg" />}
								/>
							</fieldset>

							<fieldset>
								<ClassicInput
									label="Classic input with right icon"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
									endContent={<i className="ri-lock-line ri-lg" />}
								/>
							</fieldset>

							<fieldset>
								<Input
									label="Input horizontal"
									labelPlacement="outside-left"
									radius={props.radius}
									variant={props.variant}
									description="The most basic style"
									classNames={{
										base: 'gap-3',
										mainWrapper: 'flex-1',
									}}
								/>
							</fieldset>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
