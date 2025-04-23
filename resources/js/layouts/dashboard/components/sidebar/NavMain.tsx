'use client'

import { ReactNode } from 'react'
import {
	RiBarChartFill,
	RiClipboardLine,
	RiDashboardLine,
	RiDatabaseLine,
	RiFileLine,
	RiFolder2Line,
	RiGroupLine,
	RiListCheck,
	RiMoreLine,
	RiShare2Line,
} from 'react-icons/ri'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components'

type Props = { className?: string }

export const NavMain = ({ ...props }: Props) => {
	const { isMobile } = useSidebar()

	return (
		<>
			<SidebarGroup>
				<SidebarGroupContent className="flex flex-col gap-2">
					<SidebarMenu>
						{menu.map(
							(item: { label: string; url: string; icon?: ReactNode }) => (
								<SidebarMenuItem key={item.label}>
									<SidebarMenuButton tooltip={item.label}>
										{item.icon}
										<span>{item.label}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							)
						)}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>

			<SidebarGroup className="group-data-[collapsible=icon]:hidden">
				<SidebarGroupLabel>Documents</SidebarGroupLabel>
				<SidebarMenu>
					{menu2.map(
						(item: { label: string; url: string; icon?: ReactNode }) => (
							<SidebarMenuItem key={item.label}>
								<SidebarMenuButton asChild>
									<a href={item.url}>
										{item.icon}
										<span>{item.label}</span>
									</a>
								</SidebarMenuButton>

								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<SidebarMenuAction
											showOnHover
											className="rounded-sm data-[state=open]:bg-accent"
										>
											<RiMoreLine />
											<span className="sr-only">More</span>
										</SidebarMenuAction>
									</DropdownMenuTrigger>
									
									<DropdownMenuContent
										className="w-24 rounded-lg"
										side={isMobile ? 'bottom' : 'right'}
										align={isMobile ? 'end' : 'start'}
									>
										<DropdownMenuItem>
											<RiFolder2Line />
											<span>Open</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<RiShare2Line />
											<span>Share</span>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</SidebarMenuItem>
						)
					)}
				</SidebarMenu>
			</SidebarGroup>
		</>
	)
}

const menu = [
	{
		label: 'Dashboard',
		url: '#',
		icon: <RiDashboardLine />,
	},
	{
		label: 'Lifecycle',
		url: '#',
		icon: <RiListCheck />,
	},
	{
		label: 'Analytics',
		url: '#',
		icon: <RiBarChartFill />,
	},
	{
		label: 'Projects',
		url: '#',
		icon: <RiFolder2Line />,
	},
	{
		label: 'Team',
		url: '#',
		icon: <RiGroupLine />,
	},
]

const menu2 = [
	{
		label: 'Data Library',
		url: '#',
		icon: <RiDatabaseLine />,
	},
	{
		label: 'Reports',
		url: '#',
		icon: <RiClipboardLine />,
	},
	{
		label: 'Word Assistant',
		url: '#',
		icon: <RiFileLine />,
	},
]
