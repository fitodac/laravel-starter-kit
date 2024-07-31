import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useWindowWidth } from '@/hooks'
import { useMainStore } from '@/store'
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react'
import theme from '@/../../theme.config'
import { navbar } from '@/config/navbar'
import { cn } from '@nextui-org/react'
import { Fragment } from 'react/jsx-runtime'

export const Navbar = () => {
	const { navbarOpen, setNavbarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()

	return (
		<>
			<div className="left-0 top-topbar bottom-0 fixed overflow-hidden z-30">
				<Sidebar
					transitionDuration={400}
					id="navbar"
					width={theme.sidebar.width}
					collapsedWidth={theme.sidebar.collapsedWidth}
					collapsed={windowWidth <= theme.sidebar.breakpoint && !navbarOpen}
					rootStyles={{ height: '100%' }}
					className={cn(
						'bg-gray-800 pt-6',
						'!border-gray-800 [&>div]:bg-transparent dark:bg-gray-950 dark:!border-gray-950',
						'[&.ps-collapsed_.ps-submenu-content]:!hidden'
					)}
				>
					{navbar.map((nav) => (
						<Fragment key={nav.key}>
							{nav.title && (
								<div
									className="text-white text-xs font-medium px-7 mb-1 mt-2 whitespace-nowrap"
									style={{ color: theme.sidebar.title.color }}
								>
									{nav.title}
								</div>
							)}

							<Menu
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
												backgroundColor:
													theme.sidebar.item.hover.backgroundColor,
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
								closeOnClick
							>
								{nav.menu.map(({ label, route, icon, submenu }, idx) => {
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
						</Fragment>
					))}
				</Sidebar>

				{navbarOpen && windowWidth <= 768 && (
					<motion.div
						className="bg-black/10 inset-0 fixed"
						animate={{ opacity: navbarOpen ? 1 : 0 }}
						onClick={() => setNavbarOpen(false)}
					/>
				)}
			</div>

			<div
				className="hidden flex-[0_0_auto] md:block"
				style={{ width: theme.sidebar.width }}
			></div>

			{/* <motion.div
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
			/> */}
		</>
	)
}
