import { NavigationMenuLink } from '@/components'
import { ListItem } from './ListItem'

export const MegaMenu1 = () => (
	<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
		<li className="row-span-3">
			<NavigationMenuLink
				className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
				href="/"
			>
				<div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
				<p className="text-sm leading-tight text-muted-foreground">
					Beautifully designed components built with Radix UI and Tailwind CSS.
				</p>
			</NavigationMenuLink>
		</li>

		{submenu.map((item, idx) => (
			<ListItem key={idx} title={item.title} href={item.href}>
				{item.description}
			</ListItem>
		))}
	</ul>
)

const submenu = [
	{
		title: 'Dashboard',
		href: route('demo.dashboard'),
		description: 'Re-usable components built using Radix UI and Tailwind CSS.',
	},
	{
		title: 'Web mobile',
		href: route('demo.mobile'),
		description: 'How to install dependencies and structure your app.',
	},
	{
		title: 'WebApp mobile',
		href: route('demo.mobile.webApp'),
		description: 'Styles for headings, paragraphs, lists...etc',
	},
]
