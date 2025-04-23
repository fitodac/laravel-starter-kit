import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Brand,
	Button,
	NavigationMenu,
	ScrollArea,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components'
import { Link } from '@inertiajs/react'
import { RiMenuLine } from 'react-icons/ri'
import { ListItem } from './ListItem'

export const MobileNavBar = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<RiMenuLine className="!h-10 w-auto" size="2rem" />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetHeader>
					<SheetTitle>
						<Brand />
					</SheetTitle>
				</SheetHeader>

				<div className="flex flex-col justify-between gap-6 p-4 pb-8 w-full flex-1 shrink-0">
					<ScrollArea className="shrink-0 h-[65dvh]">
						<Accordion
							type="single"
							collapsible
							className="flex w-full flex-col gap-4"
						>
							{/* MENU */}
							<Link href="/">Features</Link>
							<Link href="/">Solutions</Link>

							<AccordionItem value="getting_started" className="border-b-0">
								<AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
									Getting started
								</AccordionTrigger>
								<AccordionContent className="mt-2">
									<NavigationMenu className="grid gap-2 [&_li]:list-none">
										{submenu1.map((item, idx) => (
											<ListItem key={idx} href="/" title={item.title}>
												{item.description}
											</ListItem>
										))}
									</NavigationMenu>
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value="about" className="border-b-0">
								<AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
									About
								</AccordionTrigger>
								<AccordionContent className="mt-2">
									<NavigationMenu className="grid gap-2 [&_li]:list-none">
										{submenu2.map((item, idx) => (
											<ListItem key={idx} href="/" title={item.title}>
												{item.description}
											</ListItem>
										))}
									</NavigationMenu>
								</AccordionContent>
							</AccordionItem>

							<Link href="/">Documentation</Link>
						</Accordion>
					</ScrollArea>

					<div className="flex flex-col justify-end h-32 gap-3 shrink-0">
						<Button asChild variant="outline">
							<a href="/">Log in</a>
						</Button>
						<Button asChild>
							<a href="/">Sign up</a>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

const submenu1 = [
	{
		title: 'Introduction',
		href: '/',
		description: 'Re-usable components built using Radix UI and Tailwind CSS.',
	},
	{
		title: 'Installation',
		href: '/',
		description: 'How to install dependencies and structure your app.',
	},
	{
		title: 'Typography',
		href: '/',
		description: 'Styles for headings, paragraphs, lists...etc',
	},
]

const submenu2 = [
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
