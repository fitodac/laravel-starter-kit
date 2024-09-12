import {
	Card,
	CardHeader,
	CardBody,
	RadioGroup,
	Switch,
	Chip,
	cn,
} from '@nextui-org/react'

interface Props {}

export const SwitchComponent = ({}: Props) => {
	return (
		<>
			<Card>
				<CardHeader>Switch</CardHeader>
				<CardBody>
					<div className="space-y-6">
						<fieldset className="flex gap-6">
							<Switch defaultSelected>Default switch</Switch>
						</fieldset>

						<fieldset>
							<div className="text-sm flex items-center gap-2">
								<span>Enabled</span>
								<Switch size="sm" classNames={{ wrapper: 'mr-0' }} />
								<span>Disabled</span>
							</div>
						</fieldset>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
