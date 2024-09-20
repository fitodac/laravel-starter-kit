import type { NavbarProps } from '@/types/navbar'

export const menuMapper = (menu: any) => {
	// console.log('menu', menu)
	const regex = /corporate/gi
	const strMenu = JSON.stringify(menu, null, 2).replace(regex, 'executive')

	// console.log('strMenu', strMenu)
	return JSON.parse(strMenu) as NavbarProps
}
