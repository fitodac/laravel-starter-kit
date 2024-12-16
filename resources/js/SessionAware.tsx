import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { t } from '@/i18n'
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	useDisclosure,
} from '@nextui-org/react'
import { router, usePage } from '@inertiajs/react'
import axios from 'axios'

import type { User, PageProps } from '@/types'

const promptBeforeIdle =
	parseInt(import.meta.env.VITE_PROMPT_BERFORE_IDLE ?? '60') * 1000
const timeout = parseInt(import.meta.env.VITE_IDLE_TIMEOUT ?? '120') * 60 * 1000

// window.addEventListener('beforeunload', (event) => {
// 	event.preventDefault()
// 	event.returnValue = ''
// })

export const SessionAware = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [state, setState] = useState<string>('Active')
	const [remaining, setRemaining] = useState<number>(0)

	useEffect(() => {
		console.log('SessionAware')

		return () => {
			console.log('SessionAware unmount')
		}
		// const interval = setInterval(() => {
		// 	axios.get(route('userid')).then((resp) => console.log('resp', resp.data))
		// }, 500)

		// return () => {
		// 	clearInterval(interval)
		// }
	}, [])

	return null

	const { props } = usePage<PageProps>()
	const {
		auth: { user },
	} = props

	/**
	 * Called when the user is considered idle.
	 *
	 * Sets the application state to 'Idle' and logs the user out if they are
	 * authenticated.
	 */
	const onIdle = () => {
		console.log('onIdle')
		setState('Idle')
		if (user) {
			router.post(route('logout'))
		}
	}

	/**
	 * Called when the user is considered active again.
	 *
	 * Sets the application state back to 'Active' and closes the modal.
	 */
	const onActive = () => {
		console.log('onActive')
		setState('Active')
		onClose()
	}

	/**
	 * Called when the user is prompted to confirm their session.
	 *
	 * Sets the application state to 'Prompted' and opens the modal if the user
	 * is authenticated.
	 */
	const onPrompt = () => {
		console.log('onPrompt')
		setState('Prompted')
		if (user) {
			onOpen()
		}
	}

	const onAction = async (event?: Event) => {
		axios.get(route('userid')).then((resp) => console.log('resp', resp.data))

		// setEvent(event?.type ?? 'Event')
		// setCount(count + 1)
	}

	const { getRemainingTime, activate } = useIdleTimer({
		onIdle, // The user is considered idle
		onActive, // The user is considered active
		onPrompt, // The user is prompted to stay
		onAction,
		promptBeforeIdle, // The time in milliseconds before the user is prompted to stay
		timeout, // The time in milliseconds before the user is considered idle
		throttle: 500, // The time in milliseconds before the user is considered active
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setRemaining(Math.ceil(getRemainingTime() / 1000))
		}, 500)

		return () => {
			clearInterval(interval)
		}
	})

	/**
	 * Called when the user clicks the "I'm still here" button.
	 *
	 * Resets the idle timer by calling `activate`.
	 */
	const handleStillHere = () => {
		activate()
	}

	return (
		<>
			<Modal
				isOpen={isOpen}
				backdrop="blur"
				isDismissable={false}
				isKeyboardDismissDisabled={false}
				hideCloseButton={true}
				size="lg"
				radius="sm"
			>
				<ModalContent>
					{() => (
						<ModalBody className="px-10 py-7">
							<div className="text-center space-y-2">
								<p className="font-semibold">
									{t("You're about to be signed out")}
								</p>
								<p className="text-sm">
									{t(
										`For security reasons, your connection times out after you've been inactive for a white. Click the button below to stay signed in.`
									)}
								</p>
							</div>

							<div className="mt-3 flex justify-center">
								<Button
									color="primary"
									className="px-10"
									onPress={handleStillHere}
								>
									{t(`I'm still here`)}
								</Button>
							</div>
						</ModalBody>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}
