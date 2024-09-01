import { useEffect, useState } from 'react'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Tab,
	Tabs,
	Button,
	type ButtonProps,
} from '@nextui-org/react'
import { Navbar, MediaLibrary, FileUploader } from './components'
import { t } from '@/i18n'
import { useMediaMangerStore } from './store/mediaManagerStore'

interface Props {
	button?: {
		text?: string
		props?: ButtonProps
	}
	selectMultiple?: boolean
}

export const MediaManager = ({ button, selectMultiple = false }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { setOnClose, tabsEnabled } = useMediaMangerStore()

	useEffect(() => setOnClose && setOnClose(onClose), [])

	return (
		<>
			<Button
				{...(button?.props ?? {
					color: 'primary',
					variant: 'flat',
					size: 'sm',
				})}
				onPress={onOpen}
			>
				{button?.text ?? t('Upload an image')}
			</Button>

			<Modal
				size="full"
				isOpen={isOpen}
				isDismissable={false}
				hideCloseButton={true}
				backdrop="opaque"
				onClose={onClose}
				className="max-w-[90vw] max-h-[90vh]"
				scrollBehavior="inside"
			>
				<ModalContent className="bg-transparent">
					{(onClose) => (
						<>
							<ModalHeader className="bg-white border-b border-gray-100 rounded-t-2xl dark:bg-gray-900 dark:border-gray-800">
								{t('Media manager')}
							</ModalHeader>

							<ModalBody className="bg-white h-full p-0 overflow-hidden dark:bg-gray-900">
								<div className="h-full">
									<div className="text-gray-900 h-full flex flex-col dark:text-gray-100">
										<Tabs
											aria-label="Media manager"
											variant="light"
											color="primary"
											disabledKeys={tabsEnabled}
											defaultSelectedKey="mediaLibrary"
											classNames={{
												base: 'bg-content2 w-full dark:bg-black/20',
												tabList: 'p-0 gap-0 rounded-none',
												tab: 'px-6 py-5 rounded-none',
												cursor: 'rounded-none',
												panel: 'p-0 flex flex-1',
											}}
										>
											{/* File uploader */}
											<Tab key="uploadFiles" title="Upload files">
												<FileUploader />
											</Tab>

											{/* Media library */}
											<Tab key="mediaLibrary" title="Media library">
												<MediaLibrary />
											</Tab>
										</Tabs>
									</div>
								</div>
							</ModalBody>

							<ModalFooter className="p-0">
								<Navbar />
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
