type NavbarProps = {
	label: string
	route: string | null
	icon: string
	submenu?: {
		label: string
		route: string
	}[]
}[]

export const navbar: NavbarProps = [
	{
		label: 'Dashboard',
		route: route('dashboard.corporate'),
		icon: 'ri-home-5-fill',
	},
	{
		label: 'UI Elements',
		route: null,
		icon: 'ri-notification-badge-fill',
		submenu: [
			{
				label: 'Buttons',
				route: route('dashboard.corporate.ui.buttons'),
			},
			{
				label: 'Cards',
				route: route('dashboard.corporate.ui.cards'),
			},
		],
	},
	{
		label: 'Utilities',
		route: null,
		icon: 'ri-pantone-fill',
		submenu: [
			{
				label: 'Color',
				route: route('dashboard.corporate.utilities.color'),
			},
		],
	},
	{
		label: 'Forms',
		route: null,
		icon: 'ri-align-left',
		submenu: [
			{
				label: 'Form components',
				route: route('dashboard.corporate.form.components'),
			},
			{
				label: 'Form layouts',
				route: route('dashboard.corporate.form.layouts'),
			},
		],
	},
	{
		label: 'Tables',
		route: null,
		icon: 'ri-table-view',
		submenu: [
			{
				label: 'Table styles',
				route: route('dashboard.corporate.tables.styles'),
			},
			{
				label: 'Real data table',
				route: route('dashboard.corporate.tables.real-data'),
			},
		],
	},
]

export default { navbar }
