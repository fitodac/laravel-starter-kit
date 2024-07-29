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
				label: 'Basic table',
				route: route('dashboard.corporate.tables.basic'),
			},
			{
				label: 'Striped table',
				route: route('dashboard.corporate.tables.striped'),
			},
			{
				label: 'Borderless table',
				route: route('dashboard.corporate.tables.borderless'),
			},
			{
				label: 'Dividers table',
				route: route('dashboard.corporate.tables.dividers'),
			},
			{
				label: 'Bordered table',
				route: route('dashboard.corporate.tables.bordered'),
			},
			{
				label: 'Card table',
				route: route('dashboard.corporate.tables.card'),
			},
			{
				label: 'Card2 table',
				route: route('dashboard.corporate.tables.card2'),
			},
		],
	},
]

export default { navbar }
