import { useEffect } from 'react'
import { usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'

export const useColorMode = () => {
	const { props } = usePage<PageProps>()
	const { auth, colorMode } = props

	if (!auth) return { colorMode }

	const { user } = auth

	const mode = user?.account?.colorMode ?? colorMode

	useEffect(() => {
		mode === 'dark'
			? document.querySelector('html')?.classList.add('dark')
			: document.querySelector('html')?.classList.remove('dark')
	}, [props])

	return { colorMode }
}
