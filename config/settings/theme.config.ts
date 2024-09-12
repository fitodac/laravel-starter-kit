import { cn } from '@nextui-org/react'

export const theme = {
	/**
	 *
	 *
	 * Fonts
	 * ........................................................................
	 */
	fontSize: {
		tiny: '0.75rem', // text-tiny
		small: '0.875rem', // text-small
		medium: '1rem', // text-medium
		large: '1.125rem', // text-large
	},

	lineHeight: {
		tiny: '1rem', // text-tiny
		small: '1.25rem', // text-small
		medium: '1.5rem', // text-medium
		large: '1.75rem', // text-large
	},

	/**
	 *
	 *
	 * Border radius
	 * ........................................................................
	 */
	radius: {
		small: '4px', // rounded-small
		medium: '6px', // rounded-medium
		large: '12px', // rounded-large
	},

	/**
	 *
	 *
	 * Sidebar settings
	 * ........................................................................
	 */
	sidebar: {
		width: '230px',
		collapsedWidth: '0px',

		breakpoint: 820,

		item: {
			hover: {
				backgroundColor: '#374151',
				color: 'white',
			},
			icon: {
				size: '1.2rem',
			},
		},

		cn: {
			base: cn('bg-default-50 !border-divider', '[&>div]:bg-transparent'),
			menuTitle: 'text-foreground-600',
			menuItem: cn(
				'font-medium select-none',
				'has-[.ps-menu-button]:text-sm',
				'[&>*]:transition-colors',

				'[&>*>li>.ps-menu-button]:h-11',
				'[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button]:h-11',

				// Default color
				'text-foreground-800',

				// Active item color:
				'[&>ul>li>.ps-active]:text-primary',
				'[&>ul>li>.ps-submenu-content>ul>.ps-active]:text-primary',

				// Hover colors
				'[&>*>li>.ps-menu-button:hover]:bg-content3',
				'[&>ul>li>.ps-submenu-content>ul>li>.ps-menu-button:hover]:bg-content3'
			),
			subMenu: 'bg-content2',
		},
	},

	/**
	 *
	 *
	 * Application topbar
	 * ........................................................................
	 */
	topbar: {
		height: '56px',
		// Class names used for coloring
		cn: {
			base: 'bg-default-50 border-divider',
		},
	},

	/**
	 *
	 *
	 * Form components
	 * ........................................................................
	 */
	form: {
		field: {
			variant: 'flat',
			classicStyle: true,
		},
	},
}
