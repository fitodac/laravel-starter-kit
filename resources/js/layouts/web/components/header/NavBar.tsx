import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	// NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from '@/components'
import { MegaMenu1 } from './MegaMenu1'
import { MegaMenu2 } from './MegaMenu2'

export const NavBar = () => {
	return (
		<div className="flex items-center">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							href="/"
							className={navigationMenuTriggerStyle()}
						>
							Features
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink
							href="/"
							className={navigationMenuTriggerStyle()}
						>
							Solutions
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
						<NavigationMenuContent className="bg-popover text-popover-foreground">
							<MegaMenu1 />
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>About</NavigationMenuTrigger>
						<NavigationMenuContent>
							<MegaMenu2 />
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink
							href="/"
							className={navigationMenuTriggerStyle()}
						>
							Documentation
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			{/* <NavigationMenu>
								<NavigationMenuList>
									{menu.map((item) => renderMenuItem(item))}
								</NavigationMenuList>
							</NavigationMenu> */}
		</div>
	)
}
