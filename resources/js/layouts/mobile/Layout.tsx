import { MotionNavbar } from '@/layouts/mobile/components/MotionNavbar'
import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'
import { Footer, Header } from './components'

interface Props extends PropsWithChildren {
	pageTitle?: string
}

const Layout = ({ children, pageTitle }: Props) => {
	return (
		<main className="max-w-lg mx-auto">
			<Head title={pageTitle}>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>

			<Header />

			<div className="flex flex-col min-h-svh 2xl:px-0">
				{children}

				<Footer />
			</div>
			<MotionNavbar />
			{/* <StickyNavbar /> */}
		</main>
	)
}

export default Layout
