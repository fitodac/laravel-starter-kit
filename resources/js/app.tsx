import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { locale } from './locale'

const appName = import.meta.env.VITE_APP_NAME || ''

createInertiaApp({
	id: 'app',

	title: (title) => `${title} - ${appName}`,

	resolve: (name) => {
		const pages = (import.meta as any).glob('./pages/**/*.tsx', { eager: true })
		return pages[`./pages/${name}.tsx`]
	},

	setup({ el, App, props }) {
		const enhancedProps = {
			...props,
			locale: locale.methods,
		}

		createRoot(el).render(<App {...enhancedProps} />)
	},
}).then(() => {
	document.getElementById('app')?.removeAttribute('data-page')
})
