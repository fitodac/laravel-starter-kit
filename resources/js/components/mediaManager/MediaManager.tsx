import { useEffect } from 'react'
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
	type UseDisclosureProps,
} from '@nextui-org/react'
import { Navbar, MediaLibrary, FileUploader } from './components'
import { t } from '@/i18n'
import { useMediaMangerStore } from './store/mediaManagerStore'
import { tabsMapper } from './helpers/mappers/tabs.mapper'

import type { Image } from './types.d'

interface Props {
	button?: {
		text?: string
		props?: ButtonProps
	}
	selectMultiple?: boolean
	onFilesSelected?: (file: any) => void
	collection?: Image[] | null | undefined
}

export const MediaManager = ({
	button,
	selectMultiple = false,
	onFilesSelected,
	collection = null,
}: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { setCollection } = useMediaMangerStore()

	useEffect(() => {
		collection && setCollection && setCollection(collection)

		if (isOpen) console.log('init')
	}, [isOpen])

	return (
		<>
			<Button
				{...(button?.props
					? {
							...button.props,
							color: button.props.color ?? 'primary',
							size: button.props.size ?? 'sm',
							variant: button.props.variant ?? 'flat',
					  }
					: {
							color: 'primary',
							variant: 'flat',
							size: 'sm',
					  })}
				onPress={onOpen}
			>
				{button?.text ?? t('Upload an image')}
			</Button>

			<MediaManagerModal
				{...{
					selectMultiple,
					onFilesSelected,
					collection,
					isOpen,
					onOpen,
					onClose,
				}}
			/>
		</>
	)
}

interface ModalProps extends UseDisclosureProps {
	selectMultiple?: boolean
	onFilesSelected?: (file: any) => void
	collection?: Image[] | null | undefined
}

const MediaManagerModal = ({
	selectMultiple,
	onFilesSelected,
	collection,
	isOpen,
	onOpen,
	onClose,
}: ModalProps) => {
	const {
		tabsDisabled,
		selectedTab,
		setSelectedTab,
		setSelectMultiple,
		setFileSelected,
	} = useMediaMangerStore()

	useEffect(() => {
		if (!isOpen) {
			setFileSelected && setFileSelected(null)
			// setCollection && setCollection(null)
		} else {
			if (selectMultiple) {
				setSelectMultiple && setSelectMultiple(selectMultiple)
			} else {
				// console.log('collection', collection)
			}
		}
	}, [isOpen])

	return (
		<Modal
			size="full"
			isOpen={isOpen}
			isDismissable={false}
			hideCloseButton={true}
			backdrop="opaque"
			onClose={onClose}
			className="max-w-[90vw] max-h-[90vh]"
		>
			<ModalContent className="bg-transparent">
				{(onOpen) => (
					<>
						<ModalHeader className="bg-white border-b border-gray-100 rounded-t-2xl dark:bg-gray-900 dark:border-gray-800">
							<div className="w-full flex justify-between ">
								<span>{t('Media manager')}</span>

								<Button
									variant="ghost"
									size="sm"
									startContent={
										<svg viewBox="0 0 24 24" className="h-5 fill-white">
											<path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
										</svg>
									}
									onPress={onClose}
								>
									{t('Cancel')}
								</Button>
							</div>
						</ModalHeader>

						<ModalBody className="bg-white h-full p-0 overflow-hidden dark:bg-gray-900">
							<div className="h-full">
								<div className="text-gray-900 h-full flex flex-col dark:text-gray-100">
									<Tabs
										aria-label="Media manager"
										variant="light"
										color="primary"
										disabledKeys={tabsDisabled}
										defaultSelectedKey={selectedTab}
										selectedKey={selectedTab}
										onSelectionChange={(t) =>
											setSelectedTab && setSelectedTab(t.toString())
										}
										classNames={{
											base: 'bg-content2 w-full dark:bg-black/20',
											tabList: 'p-0 gap-0 rounded-none',
											tab: 'px-6 py-5 rounded-none',
											cursor: 'rounded-none',
											panel: 'p-0 flex flex-1',
										}}
									>
										{/* File uploader */}
										<Tab key={tabsMapper('TAB_UPLOAD')} title="Upload files">
											<FileUploader />
										</Tab>

										{/* Media library */}
										<Tab key={tabsMapper('TAB_LIBRARY')} title="Media library">
											<MediaLibrary />
										</Tab>
									</Tabs>
								</div>
							</div>
						</ModalBody>

						<ModalFooter className="p-0">
							<Navbar {...{ onFilesSelected, onClose }} />
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
