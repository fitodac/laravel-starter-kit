export type NavbarProps = {
	key: string
	title: string | null
	menu: {
		label: string
		route: string | null
		icon: string
		hasRole?: string[]
		submenu?: {
			label: string
			route: string
		}[]
	}[]
}[]