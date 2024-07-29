import {
	Card,
	CardHeader,
	CardBody,
	Button,
	ButtonGroup,
	cn,
} from '@nextui-org/react'

export const SolidButton = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Solid button</CardHeader>
				<CardBody>
					<div className="grid grid-cols-2">
						<div className="">
							<Button color="primary">Button</Button>
						</div>

						<div className="text-gray-400 text-sm dark:text-gray-500">
							The solid button is a perfect blend of beauty, simplicity, and
							functionality. Its bold and consistent color makes it visually
							striking and easy to recognize, instantly drawing attention to the
							most important actions on the screen.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const ButtonSize = ({
	title = '',
	size = 'sm',
}: {
	size?: 'sm' | 'lg'
	title: string
}) => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>{title}</CardHeader>
				<CardBody>
					<div className="flex flex-wrap gap-4">
						<Button {...{ size }}>Default</Button>
						<Button {...{ size }} color="primary">
							Primary
						</Button>
						<Button {...{ size }} color="secondary">
							Secondary
						</Button>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const ButtonVariants = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Button variants</CardHeader>
				<CardBody>
					<div className="flex flex-col gap-7 xl:flex-row xl:gap-20">
						<div className="flex flex-wrap gap-4">
							<Button color="primary" variant="bordered">
								Bordered
							</Button>
							<Button color="primary" variant="faded">
								Faded
							</Button>
							<Button color="primary" variant="flat">
								Flat
							</Button>
							<Button color="primary" variant="ghost">
								Ghost
							</Button>
							<Button color="primary" variant="shadow">
								Shadow
							</Button>
						</div>

						<div className="text-gray-400 text-sm flex-1 dark:text-gray-500">
							These buttons showcase a range of design styles that enhance the
							visual appeal and usability of the interface. Each variant, from
							the bold lines of the bordered button to the understated elegance
							of the ghost button, brings a unique aesthetic quality. The faded
							button offers a soft, subtle touch, while the flat button embraces
							minimalism for a clean, unobtrusive look. The shadow button adds
							depth and dimension, creating a striking visual hierarchy.
							Together, these buttons not only provide functional diversity but
							also contribute to a cohesive and beautiful design language that
							elevates the overall user experience.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const LightButton = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Light button</CardHeader>
				<CardBody>
					<div className="grid grid-cols-2">
						<div className="">
							<Button color="primary" variant="light">
								Light button
							</Button>
						</div>

						<div className="text-gray-400 text-sm dark:text-gray-500">
							The light button offers a subtle design for less important
							actions, serving as a gentle alternative to links. Its understated
							look integrates seamlessly into the interface, balancing
							visibility and subtlety for secondary tasks.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const LoadingButton = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Loading states</CardHeader>
				<CardBody>
					<div className="grid grid-cols-2">
						<div className="flex flex-col gap-4">
							<div>
								<Button color="primary" isLoading>
									Sending
								</Button>
							</div>

							<div>
								<Button color="primary" isLoading variant="light">
									Sending
								</Button>
							</div>

							<div>
								<Button color="primary" isLoading variant="flat">
									Sending
								</Button>
							</div>
						</div>

						<div className="text-gray-400 text-sm dark:text-gray-500">
							The loading button features a spinner that activates with the
							isLoading attribute, clearly indicating that a process is
							underway. The spinner enhances user experience by providing
							feedback and maintaining clarity during loading states.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const IconizedButtons = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Icons</CardHeader>
				<CardBody>
					<div
						className={cn(
							'text-gray-400 text-sm grid gap-8',
							'lg:grid-cols-2 lg:gap-20',
							'xl:grid-cols-4 xl:gap-14',
							'dark:text-gray-500'
						)}
					>
						<div className="space-y-5">
							<div className="flex justify-between items-center">
								<span>Basic button</span>
								<Button
									color="primary"
									size="sm"
									startContent={<i className="ri-folder-5-line ri-xl" />}
								>
									Find files
								</Button>
							</div>

							<div className="flex justify-between items-center">
								<span>Flat variant</span>
								<Button
									color="primary"
									size="sm"
									variant="flat"
									startContent={<i className="ri-camera-fill ri-xl" />}
								>
									Photos
								</Button>
							</div>

							<div className="flex justify-between items-center">
								<span>Light variant</span>
								<Button
									color="primary"
									variant="light"
									startContent={
										<i className="ri-settings-2-line ri-xl motion-safe:animate-[spin_3s_linear_infinite] duration-700" />
									}
								>
									Settings
								</Button>
							</div>

							<div className="flex justify-between items-center">
								<span>Rounded shdowed</span>
								<Button
									color="primary"
									size="sm"
									radius="full"
									variant="shadow"
									startContent={<i className="ri-search-2-line ri-xl" />}
								>
									Search
								</Button>
							</div>
						</div>

						<div className="space-y-5">
							<div className="flex justify-between items-center">
								<span>Icon button</span>
								<Button isIconOnly color="primary">
									<i className="ri-instagram-line ri-xl" />
								</Button>
							</div>
							<div className="flex justify-between items-center">
								<span>Rounded icon</span>
								<Button isIconOnly color="primary" radius="full">
									<i className="ri-user-line ri-xl" />
								</Button>
							</div>
							<div className="flex justify-between items-center">
								<span>Light variant</span>
								<Button isIconOnly color="primary" variant="light">
									<i className="ri-facebook-fill ri-xl" />
								</Button>
							</div>
						</div>

						<div className="text-gray-400 text-sm xl:col-span-2 dark:text-gray-500">
							Buttons with icons enhance the UI by combining visual elements
							with functionality, making interactions more intuitive and
							efficient. Icons provide immediate visual cues that convey the
							button's purpose at a glance, improving user understanding and
							streamlining navigation. By incorporating recognizable symbols,
							these buttons help users quickly identify actions like saving,
							deleting, or navigating, thereby enhancing overall usability and
							reducing cognitive load. Their integration into the UI adds both
							clarity and aesthetic appeal, making the interface more engaging
							and user-friendly.
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const ButtonVariantsRounded = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Button rounded variants</CardHeader>
				<CardBody>
					<div className="flex flex-col gap-7 xl:flex-row xl:gap-20">
						<div className="flex flex-wrap gap-4">
							<Button color="primary" variant="bordered" radius="full">
								Bordered
							</Button>
							<Button color="primary" variant="faded" radius="full">
								Faded
							</Button>
							<Button color="primary" variant="flat" radius="full">
								Flat
							</Button>
							<Button color="primary" variant="ghost" radius="full">
								Ghost
							</Button>
							<Button color="primary" variant="shadow" radius="full">
								Shadow
							</Button>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}

export const GroupedButtons = () => {
	return (
		<>
			<Card shadow="none">
				<CardHeader>Button group</CardHeader>
				<CardBody>
					<div className="grid gap-5 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-1 2xl:grid-cols-2">
						<div className="">
							<ButtonGroup>
								<Button color="primary">Option 1</Button>
								<Button color="primary">Option 2</Button>
								<Button color="primary">Option 3</Button>
							</ButtonGroup>
						</div>

						<div className="">
							<ButtonGroup size="sm" variant="flat">
								<Button color="primary">Create</Button>
								<Button color="primary">Edit</Button>
								<Button color="primary">Delete</Button>
							</ButtonGroup>
						</div>

						<div className="">
							<ButtonGroup variant="bordered">
								<Button color="primary">Bordered</Button>
								<Button color="primary">Bordered</Button>
								<Button color="primary">Bordered</Button>
							</ButtonGroup>
						</div>

						<div className="">
							<ButtonGroup radius="full">
								<Button color="primary">Bordered</Button>
								<Button color="primary">Bordered</Button>
								<Button color="primary">Bordered</Button>
							</ButtonGroup>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	)
}
