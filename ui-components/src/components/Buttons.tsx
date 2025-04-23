import { Button, buttonVariants } from '@/components'
import { Link } from '@inertiajs/react'
import {
	RiArrowLeftLine,
	RiArrowRightLine,
	RiMailUnreadLine,
} from 'react-icons/ri'

import { Row } from './Row'
import { SectionHeader } from './SectionHeader'

export const Buttons = () => {
	return (
		<div className="">
			<SectionHeader title="Buttons" />

			<SectionHeader title="Basic Buttons" head="h3" />

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button>Default</Button>`,
				]}
			>
				<Button>Default</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button variant="secondary">Secondary</Button>`,
				]}
			>
				<Button variant="secondary">Secondary</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button variant="destructive">Destructive</Button>`,
				]}
			>
				<Button variant="destructive">Destructive</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button variant="outline">Outline</Button>`,
				]}
			>
				<Button variant="outline">Outline</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button variant="ghost">Ghost</Button>`,
				]}
			>
				<Button variant="ghost">Ghost</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button variant="link">Link</Button>`,
				]}
			>
				<Button variant="link">Link</Button>
			</Row>

			<Row
				code={[
					`import { buttonVariants } from '@/components'`,
					`import { Link } from '@inertiajs/react'`,
					'',
					`<Link href="#" className={buttonVariants({ variant: 'link' })}>`,
					'	Link',
					'</Link>',
				]}
			>
				<Link href="#" className={buttonVariants({ variant: 'link' })}>
					Link
				</Link>

				<p className="text-sm mt-6">
					This starter kit don't support the prop <code>asChild</code> for
					buttons, so if you want to use the <code>Link</code> component from
					Inertia, you must use it as above.
				</p>
			</Row>

			<SectionHeader title="Glow buttons" head="h3" />

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button variant="glow">Glow</Button>`,
				]}
			>
				<Button variant="glow">Glow</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button `,
					'	variant="glow"',
					'	className="!from-gray-200/40 to-white text-input">',
					'	Glow',
					'</Button>',
				]}
			>
				<Button
					variant="glow"
					className="!from-gray-200/40 to-white text-input"
				>
					Glow 2
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					`<Button `,
					'	variant="glow"',
					'	className="!from-gray-800 to-gray-600">',
					'	Glow',
					'</Button>',
				]}
			>
				<Button variant="glow" className="!from-gray-800 to-gray-600">
					Glow 3
				</Button>
			</Row>

			<SectionHeader title="Buttons with icons" head="h3" />

			<Row
				code={[
					`import { Button } from '@/components'`,
					`import { RiArrowLeftLine } from 'react-icons/ri'`,
					'',
					'<Button>',
					'	<RiArrowLeftLine />',
					'	Icon start',
					'</Button>',
				]}
			>
				<Button>
					<RiArrowLeftLine />
					Icon start
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					`import { RiArrowRightLine } from 'react-icons/ri'`,
					'',
					'<Button>',
					'	Icon end',
					'	<RiArrowRightLine />',
					'</Button>',
				]}
			>
				<Button>
					Icon end
					<RiArrowRightLine />
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					`import { RiMailUnreadLine } from 'react-icons/ri'`,
					'',
					'<Button>',
					'	<RiArrowRightLine />',
					'</Button>',
				]}
			>
				<Button size="icon">
					<RiMailUnreadLine />
				</Button>
			</Row>

			<SectionHeader title="Buttons effects" head="h3" />

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button variant="link" effect="hoverUnderline">',
					'	Hover underline',
					'</Button>',
				]}
			>
				<Button variant="link" effect="hoverUnderline">
					Hover underline
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button variant="link" effect="underline">',
					'	Underline',
					'</Button>',
				]}
			>
				<Button variant="link" effect="underline">
					Underline
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button effect="ringHover">Ring hover</Button>',
				]}
			>
				<Button effect="ringHover">Ring hover</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					`import { RiArrowLeftLine } from 'react-icons/ri'`,
					'',
					'<Button effect="expandIcon">',
					'	<RiArrowLeftLine className="icon" />',
					'	Icon start',
					'</Button>',
				]}
			>
				<Button effect="expandIcon">
					<RiArrowLeftLine className="icon" />
					Icon start
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					`import { RiArrowRightLine } from 'react-icons/ri'`,
					'',
					'<Button effect="expandIcon">',
					'	Icon end',
					'	<RiArrowRightLine className="icon" />',
					'</Button>',
				]}
			>
				<Button effect="expandIcon">
					Icon end
					<RiArrowRightLine className="icon" />
				</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button isLoading disabled>',
					'	Loading',
					'</Button>',
				]}
			>
				<Button isLoading disabled>
					Loading
				</Button>
			</Row>

			<SectionHeader title="Semantic buttons" head="h3" />

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button>Primary</Button>',
				]}
			>
				<Button>Primary</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button className="bg-yellow-600 hover:bg-yellow-500">Warning</Button>',
				]}
			>
				<Button className="bg-yellow-600 hover:bg-yellow-500">Warning</Button>
			</Row>

			<Row
				code={[
					`import { Button } from '@/components'`,
					'',
					'<Button className="bg-green-600 hover:bg-green-500">Success</Button>',
				]}
			>
				<Button className="bg-green-600 hover:bg-green-500">Success</Button>
			</Row>

			<div className="h-20"></div>
		</div>
	)
}
