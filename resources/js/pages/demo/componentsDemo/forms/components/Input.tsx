import { Card, CardHeader, CardBody, Input } from '@nextui-org/react'

interface Props {}

export const InputDefault = ({}: Props) => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Input default</CardHeader>
				<CardBody>
					<div className="space-y-6">
						<fieldset>
							<Input label="Basic input" description="The most basic style" />
						</fieldset>

						<fieldset>
							<Input label="Bordered input" variant="bordered" />
						</fieldset>

						<fieldset>
							<Input label="Faded input" variant="faded" />
						</fieldset>

						<fieldset>
							<Input label="Underlined style" variant="underlined" />
						</fieldset>

						<fieldset>
							<Input label="Rouded input" radius="full" />
						</fieldset>

						<fieldset>
							<Input
								label="Rounded bordered input"
								variant="bordered"
								radius="full"
							/>
						</fieldset>

						<fieldset>
							<Input label="Sharp input" radius="none" />
						</fieldset>

						<fieldset>
							<Input
								label="Sharp bordered input"
								variant="bordered"
								radius="none"
							/>
						</fieldset>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

interface Props {}

export const InputLabelOutside = ({}: Props) => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Label outside</CardHeader>
				<CardBody>
					<div className="space-y-3">
						<fieldset>
							<Input
								label="Basic input"
								labelPlacement="outside"
								description="Label outside style"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								label="Bordered input"
								variant="bordered"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								label="Faded input"
								variant="faded"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								label="Underlined style"
								variant="underlined"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								label="Rounded input"
								labelPlacement="outside"
								radius="full"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								radius="full"
								label="Rounded bordered input"
								variant="bordered"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								label="Sharp input"
								labelPlacement="outside"
								radius="none"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>

						<fieldset>
							<Input
								radius="none"
								label="Sharp bordered input"
								variant="bordered"
								labelPlacement="outside"
								classNames={{
									label:
										'absolute left-1 -top-3 -translate-y-3 group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
								}}
							/>
						</fieldset>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
