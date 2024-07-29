import { useMainStore } from '@/store'
import { useWindowWidth } from '.'
import { useEffect } from 'react'

export const useNavbarToggler = () => {
	const { navbarOpen, setNavbarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	useEffect(() => {
		setNavbarOpen(false)
		console.log('windowWidth', windowWidth)
		// if (windowWidth >= 768) setNavbarOpen(false)
	}, [windowWidth])

	const toggleNavbar = () => setNavbarOpen(!navbarOpen)

	return { navbarOpen, setNavbarOpen, toggleNavbar }
}
