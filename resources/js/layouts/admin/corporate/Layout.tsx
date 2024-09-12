import { type PropsWithChildren, useEffect } from 'react'
import { Head, usePage } from '@inertiajs/react'
import { Button, cn, Divider } from '@nextui-org/react'
import { useMainStore } from '@/store'
import { ColorModeToggler, ProfileDropdown } from '@/components'
import { theme } from '@/config'

import { useColorMode, useWindowWidth } from '@/hooks'
import { Navbar } from './components'

import type { PageProps } from '@/types'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const Layout = ({ children, pageTitle }: Props) => {
	const { navbarOpen, setNavbarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()
	const {
		props: { settings },
	} = usePage<PageProps>()

	useEffect(() => {
		if (windowWidth > 768 && !navbarOpen) {
			setNavbarOpen(true)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background min-h-screen">
				<div
					className={cn(
						'border-b top-0 inset-x-0 fixed z-30',
						theme.topbar.cn.base
					)}
				>
					<div
						className={cn(
							'h-topbar py-2 px-4 flex justify-between items-center'
						)}
					>
						<div>
							<img src={settings.logo} alt="Logo" className="w-20 md:w-24" />
						</div>

						<div className="flex items-center gap-x-3 h-full">
							<ColorModeToggler />
							<Divider orientation="vertical" className="h-2/3" />
							<ProfileDropdown />

							<Button
								isIconOnly
								radius="lg"
								variant="light"
								className="md:hidden"
								onPress={() => setNavbarOpen(!navbarOpen)}
							>
								<i
									className={cn(
										'ri-xl',
										navbarOpen ? 'ri-close-large-line' : 'ri-menu-line'
									)}
								/>
							</Button>
						</div>
					</div>
				</div>

				<div className="flex min-h-svh pt-topbar">
					<Navbar />

					<div className="flex-1 overflow-x-auto">{children}</div>
				</div>
			</main>
		</>
	)
}
