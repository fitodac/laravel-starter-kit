import { type PropsWithChildren, useEffect } from 'react'
import { Head } from '@inertiajs/react'
import { Button, cn, Divider } from '@nextui-org/react'
import { useMainStore } from '@/store'
import { ColorModeToggler, ProfileDropdown } from '@/components'

import { useColorMode, useWindowWidth } from '@/hooks'
import { Navbar } from './components'

import imgBrand from '@/assets/img/brand.svg'

interface Props extends PropsWithChildren {
	pageTitle: string
}

export const Layout = ({ children, pageTitle }: Props) => {
	const { navbarOpen, setNavbarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()
	const { colorMode } = useColorMode()

	useEffect(() => {
		if (windowWidth > 768 && !navbarOpen) {
			setNavbarOpen(true)
		}
	}, [windowWidth])

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-gray-50 min-h-screen dark:bg-gray-900">
				<div
					className={cn(
						'bg-white border-b border-gray-100 top-0 inset-x-0 fixed z-30',
						'dark:bg-gray-900 dark:border-gray-950'
					)}
				>
					<div
						className={cn(
							'h-topbar py-2 px-4 flex justify-between items-center'
						)}
					>
						<div>
							<img src={imgBrand} alt="Logo" className="w-20 md:w-24" />
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
