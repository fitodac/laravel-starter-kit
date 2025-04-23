'use client'

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components'
import { Link, usePage } from '@inertiajs/react'
import {
	RiBankCardLine,
	RiLogoutBoxRLine,
	RiMore2Fill,
	RiNotificationLine,
	RiUserLine,
} from 'react-icons/ri'

import type { PageProps } from '@/types'

export const NavUser = () => {
	const { isMobile } = useSidebar()
	const { auth } = usePage().props as PageProps

	return (
		<SidebarMenu>
			{auth ? (
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src={
											auth.profile_picture ??
											`https://ui-avatars.com/api/?background=0086ff&color=fff&uppercase=false&name=${auth.username}`
										}
										alt={auth.username}
									/>
									<AvatarFallback className="rounded-lg">CN</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{auth.username}</span>
									<span className="truncate text-xs text-muted-foreground">
										{auth.email}
									</span>
								</div>
								<RiMore2Fill className="ml-auto size-4" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>

						<DropdownMenuContent
							className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							side={isMobile ? 'bottom' : 'right'}
							align="end"
							sideOffset={4}
						>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage
											src={
												auth.profile_picture ??
												`https://ui-avatars.com/api/?background=0086ff&color=fff&uppercase=false&name=${auth.username}`
											}
											alt={auth.username}
										/>
										<AvatarFallback className="rounded-lg">CN</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">
											{auth.username}
										</span>
										<span className="truncate text-xs text-muted-foreground">
											{auth.email}
										</span>
									</div>
								</div>
							</DropdownMenuLabel>

							<DropdownMenuSeparator />

							<DropdownMenuGroup>
								<DropdownMenuItem asChild>
									<a href={route('filament.admin.pages.profile')}>
										<RiUserLine />
										Profile
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<a href={route('filament.admin.pages.account')}>
										<RiUserLine />
										Account
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<RiBankCardLine />
									Billing
								</DropdownMenuItem>
								<DropdownMenuItem>
									<RiNotificationLine />
									Notifications
								</DropdownMenuItem>
							</DropdownMenuGroup>

							<DropdownMenuSeparator />

							<DropdownMenuItem asChild>
								<Link href={route('signout')} method="post" className="w-full">
									<RiLogoutBoxRLine /> Sign out
								</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			) : (
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href={route('filament.admin.auth.login')}>
							<RiUserLine />
							Sign in
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			)}
		</SidebarMenu>
	)
}
