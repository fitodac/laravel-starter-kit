import { FormEvent, useEffect, useRef, useContext, useCallback } from 'react'
import { usePage, useForm, router } from '@inertiajs/react'
import { NotificationContext } from '../providers/notificationProvider'
import { toast } from 'react-toastify'
import { t } from '@/i18n'

import type { NotificationContextProps } from '@/types/notifications'

export const useActions = () => {
	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	const { data, post, patch, errors, setData, processing, clearErrors, reset } =
		useForm({
			title: '',
			body: '',
			notification_for_all: true,
			user_ids: [],
		})

	const successCallback = useCallback(() => {
		dispatch({ type: 'closeDrawer' })

		reset()
		dispatch({ type: 'setSelectedNotification', payload: null })
		router.reload({ only: ['notifications'] })
	}, [])

	const submit = (e: FormEvent) => {
		e.preventDefault()

		console.log('data', data)

		if (state.selectedNotification) {
		} else {
			post(route('dashboard.notification.store'), {
				// @ts-ignore
				onSuccess: (resp: InertiaResponse) => {
					if (resp.props.flash && resp.props.flash.success) {
						toast.success(t(resp.props.flash.success))
					}

					successCallback()
				},
				onError: (errors) => console.log('error', errors),
			})
		}
	}

	const inputName = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setTimeout(() => {
			inputName.current?.focus()
		}, 300)
	}, [state.drawerOpen])

	return {
		data,
		post,
		patch,
		errors,
		setData,
		processing,
		clearErrors,
		reset,
		inputName,
		submit,
	}
}
