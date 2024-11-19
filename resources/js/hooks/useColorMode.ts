import { useEffect } from 'react'
import { usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'

export const useColorMode = () => {
	const { auth, colorMode } = usePage<PageProps>().props

	if (!auth) return { colorMode }

	const { user } = auth ?? []

	const mode = Array.isArray(user)
		? (user.account && user.account.colorMode) ?? 'light'
		: colorMode

	useEffect(() => {
		document.querySelector('html')?.classList.add(mode)
	}, [colorMode])

	return { colorMode }
}
