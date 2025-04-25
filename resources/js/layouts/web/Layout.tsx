import { Head } from '@inertiajs/react'
import { PropsWithChildren, useRef } from 'react'
import { Footer, Header } from './components'

interface Props extends PropsWithChildren {
	pageTitle?: string
}

const Layout = ({ children, pageTitle }: Props) => {
	const currentRoute = useRef(route().current())

	return (
		<main>
			<Head title={pageTitle}>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</Head>

			<Header />

			<div className="flex flex-col min-h-svh">
				{children}
				<Footer />
			</div>
		</main>
	)
}

export default Layout
