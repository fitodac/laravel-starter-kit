import { ListItem } from './ListItem'

export const MegaMenu2 = () => (
	<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
		{submenu.map((item, idx) => (
			<ListItem key={idx} title={item.title} href={item.href}>
				{item.description}
			</ListItem>
		))}
	</ul>
)

const submenu: { title: string; href: string; description: string }[] = [
	{
		title: 'Alert Dialog',
		href: '/',
		description:
			'A modal dialog that interrupts the user with important content and expects a response.',
	},
	{
		title: 'Hover Card',
		href: '/',
		description:
			'For sighted users to preview content available behind a link.',
	},
	{
		title: 'Progress',
		href: '/',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
	},
	{
		title: 'Scroll-area',
		href: '/',
		description: 'Visually or semantically separates content.',
	},
	{
		title: 'Tabs',
		href: '/',
		description:
			'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
	},
	{
		title: 'Tooltip',
		href: '/',
		description:
			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
	},
]
