import './bootstrap'
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'
import '../css/app.css'

import { createRoot, hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { HeroUIProvider } from '@heroui/react'
import { semanticColors } from '@heroui/theme'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'
window.locale = import.meta.env.VITE_APP_LOCALE || 'en'

createInertiaApp({
	title: (title) => `${title} - ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./pages/${name}.tsx`,
			import.meta.glob('./pages/**/*.tsx')
		),
	setup({ el, App, props }) {
		if (import.meta.env.DEV) {
			createRoot(el).render(
				<HeroUIProvider>
					<App {...props} />
				</HeroUIProvider>
			)
			return
		}

		hydrateRoot(el, <App {...props} />)
	},
	progress: {
		delay: 0,
		color: semanticColors.dark.primary[500],
		includeCSS: true,
		showSpinner: true,
	},
}).then(() => {
	document.getElementById('app')?.removeAttribute('data-page')
})
