import { useState } from 'react'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { InternalNavbar } from './components'
import type { Template } from '../../../types'
import { useConditionalClassName } from '../hooks/useConditionalClassName'

type placement =
	| 'auto'
	| 'center'
	| 'top'
	| 'top-center'
	| 'bottom'
	| 'bottom-center'

interface Props {
	template?: Template
}

export const ModalPage = ({ template }: Props) => {
	const { headerClassName, contentClassName } =
		useConditionalClassName(template)

	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [modalPlacement, setModalPlacement] = useState<placement>('auto')

	return (
		<>
			<PageHeader
				title={t('Modal')}
				classNames={{
					wrapper: headerClassName,
				}}
			>
				<p className="text-sm leading-tight">
					A modal is a pop-up window that appears on top of a webpage,
					temporarily blocking the main content to focus the user’s attention on
					a specific action or information. It’s often used for tasks like
					signing in, displaying important messages, or confirming actions.
					Modals enhance user experience by keeping everything in one place
					without navigating away from the current page.
				</p>
			</PageHeader>

			<PageContent
				className={contentClassName}
				aside={
					<InternalNavbar
						{...{
							menu: [
								// { key: 'solidButton', label: 'Solid button' },
							],
						}}
					/>
				}
			>
				<div className="max-w-2xl space-y-10">
					<div className="text-xl">Position</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div>
							<button
								className="bg-indigo-400 text-white w-32 aspect-square grid place-content-center rounded"
								onClick={() => {
									setModalPlacement('auto')
									onOpen()
								}}
							>
								<span>Auto</span>
							</button>
						</div>

						<div>
							<button
								className="bg-indigo-400 text-white w-32 aspect-square grid place-content-center rounded"
								onClick={() => {
									setModalPlacement('top')
									onOpen()
								}}
							>
								<span>Top</span>
							</button>
						</div>

						<div>
							<button
								className="bg-indigo-400 text-white w-32 aspect-square grid place-content-center rounded"
								onClick={() => {
									setModalPlacement('bottom')
									onOpen()
								}}
							>
								<span>Bottom</span>
							</button>
						</div>

						<div>
							<button
								className="bg-indigo-400 text-white w-32 aspect-square grid place-content-center rounded"
								onClick={() => {
									setModalPlacement('center')
									onOpen()
								}}
							>
								<span>Center</span>
							</button>
						</div>

						<div>
							<button
								className="bg-indigo-400 text-white w-32 aspect-square grid place-content-center rounded"
								onClick={() => {
									setModalPlacement('top-center')
									onOpen()
								}}
							>
								<span>Top Center</span>
							</button>
						</div>

						<div>
							<button
								className="bg-indigo-400 text-white w-32 aspect-square grid place-content-center rounded"
								onClick={() => {
									setModalPlacement('bottom-center')
									onOpen()
								}}
							>
								<span>Bottom Center</span>
							</button>
						</div>
					</div>
				</div>

				<div className="h-20"></div>
			</PageContent>

			<Modal {...{ isOpen, placement: modalPlacement, onOpenChange }}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>Modal...</ModalHeader>
							<ModalBody>Hola Mundo!</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
