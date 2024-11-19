import { useEffect, useRef, useState } from 'react'
import { usePage } from '@inertiajs/react'
import type { PageProps } from '@/types'

export const TopbarLanguage = () => {
	const { props } = usePage<PageProps>()
	const {
		auth: { user },
	} = props

	const [language, setLanguage] = useState(user?.account?.language ?? 'en')

	useEffect(() => {
		setLanguage(user?.account?.language ?? 'en')
	}, [props])

	return (
		<>
			<img
				src={`img/flags/${language}.svg`}
				alt={language}
				className="w-5 h-5"
			/>
		</>
	)
}
