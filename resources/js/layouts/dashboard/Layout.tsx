import { SidebarInset, SidebarProvider } from '@/components'
import { Head } from '@inertiajs/react'
import { JSX, PropsWithChildren, useRef } from 'react'
import { AppSidebar, Header } from './components'

interface Props extends PropsWithChildren {
	pageTitle?: string
	header?: JSX.Element
}

const Layout = ({ children, pageTitle, header }: Props) => {
	const currentRoute = useRef(route().current())

	return (
		<>
			<Head title={pageTitle}>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</Head>

			<SidebarProvider>
				<AppSidebar variant="inset" />

				<SidebarInset>
					<Header children={header} />

					<div className="flex flex-1 flex-col">
						<div className="@container/main flex flex-1 flex-col gap-2">
							<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
								{children}
							</div>
						</div>
					</div>
				</SidebarInset>
			</SidebarProvider>
		</>
	)
}

export default Layout
