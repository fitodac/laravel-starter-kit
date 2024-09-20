import { ColorModeToggler, ProfileDropdown } from '@/components'
import { useMemo } from 'react'
import {
	Button,
	cn,
	Divider,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	ScrollShadow,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react'
import { templates, theme } from '@/config'
import { useMainStore } from '@/store'
import { useWindowWidth } from '@/hooks'
import { Link, usePage } from '@inertiajs/react'
import { Fragment } from 'react/jsx-runtime'
import { menuMapper } from '../helpers/menuMapper'

import type { PageProps } from '@/types'

const { executive: template } = templates

export const Header = () => {
	const { sidebarOpen, setSidebarOpen, colorMode } = useMainStore()
	const { windowWidth } = useWindowWidth()
	const { demoExecutiveAdminNavbar: adminNavbar, auth } =
		usePage<PageProps>().props

	if (!adminNavbar) return <></>

	console.log('adminNavbar', adminNavbar)
	const menu = useMemo(() => menuMapper(adminNavbar), [adminNavbar])

	return (
		<Navbar
			isMenuOpen={true}
			shouldHideOnScroll
			maxWidth="xl"
			height="auto"
			classNames={{
				base: template.topbar.cn.base,
				wrapper: 'gap-0 md:flex-col',
				content: 'w-full',
			}}
		>
			<div
				className="w-full py-2 px-4 flex justify-between items-center"
				style={{ height: template.topbar.height }}
			>
				<div>
					<img
						src={theme[colorMode].logo}
						alt="Logo"
						className="w-20 md:w-24"
					/>
				</div>

				<div className="flex items-center gap-x-3 h-full">
					<ColorModeToggler />
					<Divider orientation="vertical" className="h-5" />
					<ProfileDropdown />

					<Button
						isIconOnly
						radius="lg"
						variant="light"
						className="md:hidden"
						onPress={() => setSidebarOpen(!sidebarOpen)}
					>
						<i
							className={cn(
								'ri-xl',
								sidebarOpen ? 'ri-close-large-line' : 'ri-menu-line'
							)}
						/>
					</Button>
				</div>
			</div>

			<Divider className="opacity-30 hidden md:flex dark:opacity-100" />

			<NavbarContent className="hidden md:flex">
				{menu &&
					menu.map((nav) => (
						<Fragment key={nav.key}>
							{nav.permissions &&
							auth.permissions &&
							!auth.permissions.some((e) => nav.permissions?.includes(e)) ? (
								<></>
							) : (
								nav.menu.length > 0 &&
								nav.menu.map(({ label, route: path, submenu, permissions }) =>
									submenu && submenu.length > 0 ? (
										<Dropdown key={label + path}>
											<NavbarItem>
												<DropdownTrigger>
													<Button
														disableRipple
														className={cn(template.topbar.navbar.cn.navbarItem)}
														endContent={<i className="ri-arrow-down-s-line" />}
														radius="none"
														variant="light"
													>
														{label}
													</Button>
												</DropdownTrigger>
											</NavbarItem>

											<DropdownMenu
												items={submenu}
												hideEmptyContent
												aria-label="Sub menu"
												className="w-[280px] max-h-[330px] overflow-y-auto rounded-lg"
												itemClasses={{
													base: 'gap-4',
												}}
											>
												{(item) => (
													<DropdownItem
														key={item.label}
														textValue={item.label}
														className={template.topbar.navbar.cn.subMenuItem}
													>
														<Link
															href={route(item.route || '')}
															className="p-2 flex"
														>
															{item.label}
														</Link>
													</DropdownItem>
												)}
											</DropdownMenu>
										</Dropdown>
									) : (
										<NavbarItem
											key={label + path}
											className={template.topbar.navbar.cn.navbarItem}
										>
											<Link href={route(path || '')} className="flex">
												{label}
											</Link>
										</NavbarItem>
									)
								)
							)}
						</Fragment>
					))}
			</NavbarContent>

			{/* <NavbarMenu className="w-60 left-o inset-y-0 fixed z-50">
				<NavbarMenuItem>Foo</NavbarMenuItem>
				<NavbarMenuItem>Bar</NavbarMenuItem>
			</NavbarMenu> */}
		</Navbar>
	)
}
