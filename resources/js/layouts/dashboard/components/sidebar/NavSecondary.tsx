'use client'

import { ReactNode } from 'react'
import { RiQuestionLine, RiSearchLine, RiSettings4Line } from 'react-icons/ri'

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components'

type Props = { className?: string }

export const NavSecondary = ({ ...props }: Props) => {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{menu.map(
						(item: { label: string; url: string; icon?: ReactNode }) => (
							<SidebarMenuItem key={item.label}>
								<SidebarMenuButton asChild>
									<a href={item.url}>
										{item.icon}
										<span>{item.label}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						)
					)}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	)
}

const menu = [
	{
		label: 'Settings',
		url: '#',
		icon: <RiSettings4Line />,
	},
	{
		label: 'Get Help',
		url: '#',
		icon: <RiQuestionLine />,
	},
	{
		label: 'Search',
		url: '#',
		icon: <RiSearchLine />,
	},
]
