import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
import { route } from '../../vendor/tightenco/ziggy'
import { RouteName } from 'ziggy-js'

createServer((page) =>
	createInertiaApp({
		page,
		render: ReactDOMServer.renderToString,
		resolve: (name) => {
			const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
			return pages[`./pages/${name}.jsx`]
		},
		setup: ({ App, props }) => {
			// @ts-ignore
			global.route<RouteName> = (name, params, absolute) =>
				route(name, params as any, absolute, {
					// @ts-expect-error
					...page.props.ziggy,
					// @ts-expect-error
					location: new URL(page.props.ziggy.location),
				})

			return <App {...props} />
		},
	})
)
