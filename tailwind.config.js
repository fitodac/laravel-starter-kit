import defaultTheme from 'tailwindcss/defaultTheme'
const colors = require('tailwindcss/colors')
const { nextui } = require('@nextui-org/react')

import theme from './theme.config'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
		// NextUI
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],

	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			height: {
				topbar: theme.topbar.height,
			},
			padding: {
				topbar: theme.topbar.height,
			},
			spacing: {
				topbar: theme.topbar.height,
			},
		},
	},

	plugins: [
		nextui({
			// Common colors, like TailwindCSS colors, remain consistent regardless of the theme.
			// To prevent conflicts with TailwindCSS colors, common colors are initially disabled
			// but can be activated with the addCommonColors option.
			addCommonColors: false,
			layout: {
				dividerWeight: '1px', // h-divider the default height applied to the divider component
				disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
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
				radius: {
					small: '4px', // rounded-small
					medium: '6px', // rounded-medium
					large: '12px', // rounded-large
				},
				borderWidth: {
					small: '0.7px', // border-small
					medium: '1.5px', // border-medium (default)
					large: '3px', // border-large
				},
			},

			themes: {
				light: {
					colors: {
						background: '#FFFFFF', // or DEFAULT
						foreground: '#11181C', // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: '#FFFFFF',
							DEFAULT: '#006FEE',
						},
						// ... rest of the colors
					},
					layout: {
						hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small:
								'0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-medium
							medium:
								'0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-large
							large:
								'0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
						},
					},
				},
				dark: {
					colors: {
						background: '#000000', // or DEFAULT
						foreground: '#ECEDEE', // or 50 to 900 DEFAULT
						primary: {
							//... 50 to 900
							foreground: '#FFFFFF',
							DEFAULT: '#006FEE',
						},
						default: {
							100: colors.gray[900],
							DEFAULT: colors.gray[800],
						},
						content1: {
							DEFAULT: colors.gray[950],
						},
					},
					layout: {
						hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small:
								'0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
							// shadow-medium
							medium:
								'0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
							// shadow-large
							large:
								'0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
						},
					},
				},
			},
		}),
	],
}
