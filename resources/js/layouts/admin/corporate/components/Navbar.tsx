import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useWindowWidth } from '@/hooks'
import { useMainStore } from '@/store'
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import theme from '@/../../theme.config'
import { navbar } from '@/config/navbar'

export const Navbar = () => {
	const { navbarOpen, setNavbarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	return (
		<>
			<div className="left-0 top-topbar bottom-0 fixed overflow-hidden z-30">
				<Sidebar
					id="navbar"
					width={theme.sidebar.width}
					collapsedWidth={theme.sidebar.collapsedWidth}
					collapsed={windowWidth <= theme.sidebar.breakpoint && !navbarOpen}
					rootStyles={{ height: '100%' }}
					className="bg-gray-800 !border-gray-800 [&>div]:bg-transparent dark:bg-gray-950 dark:!border-gray-950"
				>
					<Menu
						rootStyles={{
							paddingTop: '10px',
						}}
						menuItemStyles={{
							root: {},
							button: ({ level, active, disabled, isSubmenu }) => {
								return {
									color: active ? 'white' : theme.sidebar.item.color,
									fontSize: theme.sidebar.item.fontSize,
									fontWeight: 500,
									height: theme.sidebar.item.height,
									userSelect: 'none',
									transition: '.3s ease-in-out',
									'&:hover': {
										backgroundColor: theme.sidebar.item.hover.backgroundColor,
										color: theme.sidebar.item.hover.color,
									},
								}
							},
							subMenuContent: {
								backgroundColor: theme.sidebar.subMenu.backgroundColor,
							},
							icon: {
								fontSize: theme.sidebar.item.icon.size,
								position: 'relative',
								top: '-1px',
							},
							// label: {},
							// prefix: {},
							// suffix: {},
							// icon: {},
							// SubMenuExpandIcon: {},
						}}
					>
						{navbar.map(({ label, route, icon, submenu }, idx) => {
							if (submenu) {
								return (
									<SubMenu
										key={label}
										label={label}
										icon={<i className={icon} />}
									>
										{submenu.map(({ label, route }, idx) => (
											<MenuItem
												key={route}
												component={<Link href={route || ''} />}
												active={location.href === route}
											>
												{label}
											</MenuItem>
										))}
									</SubMenu>
								)
							}

							return (
								<MenuItem
									key={route}
									component={<Link href={route || ''} />}
									icon={<i className={icon} />}
									active={location.href === route}
								>
									{label}
								</MenuItem>
							)
						})}
					</Menu>
				</Sidebar>

				{navbarOpen && windowWidth <= 768 && (
					<motion.div
						className="bg-black/10 inset-0 fixed"
						animate={{ opacity: navbarOpen ? 1 : 0 }}
						onClick={() => setNavbarOpen(false)}
					/>
				)}
			</div>

			<motion.div
				className="hidden md:block"
				initial={
					windowWidth > theme.sidebar.breakpoint && {
						width: theme.sidebar.width,
					}
				}
				animate={
					windowWidth <= theme.sidebar.breakpoint && {
						width: theme.sidebar.width,
					}
				}
			/>
		</>
	)
}
