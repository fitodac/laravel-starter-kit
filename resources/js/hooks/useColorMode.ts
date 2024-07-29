import { useEffect } from 'react'
import { useMainStore } from '@/store'

export const useColorMode = () => {
	const { colorMode, setColorMode } = useMainStore()

	useEffect(() => {
		if (colorMode === 'dark') {
			document.querySelector('html')?.classList.add('dark')
		} else {
			document.querySelector('html')?.classList.remove('dark')
		}
	}, [colorMode])

	const changeColorMode = () => {
		if (setColorMode) {
			colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
		}
	}

	return { colorMode, changeColorMode }
}
