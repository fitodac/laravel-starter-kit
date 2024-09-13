import {
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react'
import { useForm } from '@inertiajs/react'
import { t } from '@/i18n'
import { toast } from 'react-toastify'
import { Role } from '@/types/roles'

interface Props {
	role: Role
}

export const DeleteRole = ({ role }: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const { delete: destroy } = useForm()

	return (
		<>
			<Button fullWidth color="danger" variant="flat" onPress={onOpen}>
				{t('Delete')}
			</Button>

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
								{t('Confirm role deletion')}
							</ModalHeader>

							<ModalBody className="pt-0">
								<p className="text-sm">{t('This action may not be undone.')}</p>
							</ModalBody>

							<ModalFooter className="gap-x-4">
								<Button fullWidth variant="ghost" onPress={onClose}>
									{t('Cancel')}
								</Button>

								<Button
									fullWidth
									color="danger"
									onPress={() => {
										destroy(route('dashboard.role.destroy', { role }), {
											preserveScroll: true,
											// @ts-ignore
											onSuccess: (resp: InertiaResponse) => {
												if (resp.props.flash && resp.props.flash.success) {
													toast.success(t(resp.props.flash.success))
												}
											},
										})
									}}
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
