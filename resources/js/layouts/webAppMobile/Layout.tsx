import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'
import { Footer, Header } from './components'

interface Props extends PropsWithChildren {
	pageTitle?: string
}

const Layout = ({ children, pageTitle }: Props) => {
	return (
		<>
			<Head title={pageTitle}>
				<meta name="viewport" content="width=580, user-scalable=no" />
			</Head>

			<Header />

			<div className="flex min-h-svh">
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
