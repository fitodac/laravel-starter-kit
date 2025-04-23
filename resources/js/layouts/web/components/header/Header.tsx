import {
	Brand,
	buttonVariants,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components'
import { useWindowScrollPosition } from '@/hooks'
import { MobileNavBar } from '@/layouts/web/components/header/MobileNavBar'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'
import { NavBar } from './NavBar'

import type { PageProps } from '@/types'
import { RiLogoutBoxRLine, RiUserLine } from 'react-icons/ri'

export const Header = () => {
	const { y } = useWindowScrollPosition({ throttleMs: 200 })
	const { auth } = usePage().props as PageProps

	return (
		<header
			className={cn(
				'py-4 flex justify-center top-0 inset-x-0 transition-all duration-300 sticky z-20 backdrop-blur-sm',
				y > 120 && 'bg-gray-950/60 border-b border-gray-100/15 backdrop-blur-sm'
			)}
		>
			<div className="max-w-6xl flex-1 px-6 xl:px-0">
				{/* --------------------------------------------------
						Desktop Menu 
				-------------------------------------------------- */}
				<nav className="hidden justify-between lg:flex">
					<div className="flex items-center gap-6">
						<Brand />

						<NavBar />
					</div>

					<div className="flex items-center gap-5">
						{auth ? (
							<>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<div className="flex gap-x-3 items-center select-none max-w-40">
											<div className="relative box-content flex items-center justify-center overflow-hidden rounded-full size-8 shrink-0">
												<img
													src={
														auth.profile_picture ??
														`https://ui-avatars.com/api/?background=0086ff&color=fff&uppercase=false&name=${auth.username}`
													}
													alt={auth.username}
													className="aspect-square"
												/>
											</div>

											<div className="text-sm truncate">{auth.username}</div>
										</div>
									</DropdownMenuTrigger>

									<DropdownMenuContent
										className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
										align="end"
									>
										<DropdownMenuGroup>
											<DropdownMenuItem asChild>
												<a href={route('filament.admin.pages.profile')}>
													<RiUserLine /> Profile
												</a>
											</DropdownMenuItem>

											<DropdownMenuItem asChild>
												<a href={route('filament.admin.pages.account')}>
													Account
												</a>
											</DropdownMenuItem>
										</DropdownMenuGroup>

										<DropdownMenuSeparator />

										<DropdownMenuItem asChild>
											<Link
												href={route('signout')}
												method="post"
												className="w-full"
											>
												<RiLogoutBoxRLine /> Sign out
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						) : (
							<>
								<a
									href={route('filament.admin.auth.login')}
									className={buttonVariants({ variant: 'ghost', size: 'sm' })}
								>
									Sign in
								</a>

								<a
									href={route('filament.admin.auth.register')}
									className={buttonVariants({ variant: 'glow', size: 'sm' })}
								>
									Get started today
								</a>
							</>
						)}
					</div>
				</nav>

				{/* -------------------------------------------------- 
						Mobile Menu 
				-------------------------------------------------- */}
				<div className="block lg:hidden">
					<div className="flex items-center justify-between">
						<Brand />

						<MobileNavBar />
					</div>
				</div>
			</div>
		</header>
	)
}
