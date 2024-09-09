import './bootstrap'
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css'
import '../css/app.css'

import { createRoot, hydrateRoot } from 'react-dom/client'
import { createInertiaApp, router } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { NextUIProvider } from '@nextui-org/react'
import { semanticColors } from '@nextui-org/theme'
import { SessionAware } from './SessionAware'
import { Toastify } from '@/components'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

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
				<SessionAware>
					<NextUIProvider>
						<App {...props} />
						<Toastify />
					</NextUIProvider>
				</SessionAware>
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
