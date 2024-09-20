import { cn } from '@nextui-org/react'

export const template = {
	/**
	 *
	 *
	 * Application topbar
	 * ........................................................................
	 */
	topbar: {
		height: '70px',
		// Class names used for coloring
		cn: {
			base: 'bg-stone-800 dark:bg-default-100',
		},
		navbar: {
			cn: {
				navbarItem: cn(
					'bg-transparent text-default-200 text-sm',
					'pt-5 pb-4 px-2',
					'select-none cursor-pointer',
					'dark:text-foreground',
					'data-[hover=true]:bg-transparent'
				),
				subMenuItem: 'min-h-8 p-0 rounded-lg select-none',
			},
		},
	},
}
