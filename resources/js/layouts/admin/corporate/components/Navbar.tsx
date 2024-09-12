import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { useWindowWidth } from '@/hooks'
import { useMainStore } from '@/store'
import { motion } from 'framer-motion'
import { Link, usePage } from '@inertiajs/react'
import { theme } from '@/config'
import { cn } from '@nextui-org/react'
import { Fragment } from 'react/jsx-runtime'

import { PageProps } from '@/types'

export const Navbar = () => {
	const { navbarOpen, setNavbarOpen } = useMainStore()
	const { windowWidth } = useWindowWidth()
	const { adminNavbar, auth } = usePage<PageProps>().props

	return (
		<>
			<div className="left-0 top-topbar bottom-0 mt-px fixed overflow-hidden z-30">
				<Sidebar
					transitionDuration={400}
					id="navbar"
					width={theme.sidebar.width}
					collapsedWidth={theme.sidebar.collapsedWidth}
					collapsed={windowWidth <= theme.sidebar.breakpoint && !navbarOpen}
					rootStyles={{ height: '100%' }}
					className={cn(
						'pt-6',
						theme.sidebar.cn.base,
						'[&.ps-collapsed_.ps-submenu-content]:!hidden'
					)}
				>
					{adminNavbar &&
						adminNavbar.map((nav) => (
							<Fragment key={nav.key}>
								{nav.permissions &&
								auth.permissions &&
								!auth.permissions.some((e) => nav.permissions?.includes(e)) ? (
									<></>
								) : (
									nav.title &&
									nav.menu.length > 0 && (
										<div
											className={cn(
												'text-xs font-medium px-7 mb-1 mt-2 whitespace-nowrap',
												theme.sidebar.cn.menuTitle
											)}
										>
											{nav.title}
										</div>
									)
								)}

								<Menu
									menuItemStyles={{
										root: {},
										icon: {
											fontSize: theme.sidebar.item.icon.size,
											position: 'relative',
											top: '-1px',
										},
									}}
									closeOnClick
									className={theme.sidebar.cn.menuItem}
								>
									{nav.menu.map(
										({ label, route: path, icon, submenu, permissions }) => {
											if (
												permissions &&
												auth.permissions &&
												!auth.permissions.some((e) => permissions?.includes(e))
											) {
												return <Fragment key={label + path}></Fragment>
											}

											if (submenu) {
												return (
													<SubMenu
														key={label + path}
														label={label}
														icon={<i className={icon} />}
													>
														{submenu.map(({ label, route: path }) => (
															<Fragment key={path}>
																<MenuItem
																	component={<Link href={route(path || '')} />}
																	active={location.href === route(path || '')}
																	className={theme.sidebar.cn.subMenu}
																>
																	{label}
																</MenuItem>
															</Fragment>
														))}
													</SubMenu>
												)
											}

											return (
												<Fragment key={path}>
													<MenuItem
														component={<Link href={route(path || '')} />}
														icon={<i className={icon} />}
														active={location.href === route(path || '')}
													>
														{label}
													</MenuItem>
												</Fragment>
											)
										}
									)}
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
		</>
	)
}
