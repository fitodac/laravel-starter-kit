import { useForm, usePage } from '@inertiajs/react'
import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Card,
	CardBody,
} from '@nextui-org/react'
import { t } from '@/i18n'
import { toast } from 'react-toastify'

import type { PageProps, InertiaResponse } from '@/types'

export const DeleteAccount = () => {
	const { user } = usePage<PageProps>().props
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const { delete: destroy } = useForm()

	return (
		<>
			<div className="space-y-5">
				<Card shadow="none" className="bg-danger-50 text-danger-500">
					<CardBody className="text-sm font-light">
						{t('Deleted accounts cannot be restored!')}
					</CardBody>
				</Card>

				<Button color="danger" onPress={onOpen}>
					{t('Delete account')}
				</Button>
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isDismissable={false}
				isKeyboardDismissDisabled={true}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 select-none">
								{t('Confirm account deletion')}
							</ModalHeader>

							<ModalBody className="pt-0">
								<p className="text-sm">
									{t('This account will be permanently deleted.')}
								</p>
							</ModalBody>

							<ModalFooter className="gap-x-4">
								<Button fullWidth variant="ghost" onPress={onClose}>
									{t('Cancel')}
								</Button>

								<Button
									fullWidth
									color="danger"
									onPress={() =>
										destroy(route('dashboard.user.destroy', { user }), {
											preserveScroll: true,
											// @ts-ignore
											onSuccess: (resp: InertiaResponse) => {
												if (resp.props.flash && resp.props.flash.success) {
													toast.success(t(resp.props.flash.success))
												}
											},
										})
									}
								>
									{t('Confirm')}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
