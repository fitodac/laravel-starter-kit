import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Snippet } from '@nextui-org/react'
import { commonColors, semanticColors } from '@nextui-org/theme'
import { Fragment } from 'react/jsx-runtime'
import { Children } from 'react'

interface Props {}

console.log('commonColors', commonColors)
console.log('semanticColors', semanticColors)

const data = [
	{
		title: 'Layout',
		items: [
			{ name: 'Background', cn: 'bg-background' },
			{ name: 'Foreground', cn: 'bg-foreground' },
			{ name: 'Divider', cn: 'bg-divider' },
			{ name: 'Focus', cn: 'bg-focus' },
		],
	},
	{
		title: 'Content',
		items: [
			{ name: 'Content1', cn: 'bg-content1' },
			{ name: 'Content2', cn: 'bg-content2' },
			{ name: 'Content3', cn: 'bg-content3' },
			{ name: 'Content4', cn: 'bg-content4' },
		],
	},
	{
		title: 'Base',
		items: [
			{ name: 'Default', cn: 'bg-default' },
			{ name: 'Primary', cn: 'bg-primary' },
			{ name: 'Secondary', cn: 'bg-secondary' },
			{ name: 'Success', cn: 'bg-success' },
			{ name: 'Warning', cn: 'bg-warning' },
			{ name: 'Danger', cn: 'bg-danger' },
		],
	},
	{
		title: 'Foreground',
		items: [
			{ name: '50', cn: 'bg-foreground-50' },
			{ name: '100', cn: 'bg-foreground-100' },
			{ name: '200', cn: 'bg-foreground-200' },
			{ name: '300', cn: 'bg-foreground-300' },
			{ name: '400', cn: 'bg-foreground-400' },
			{ name: '500', cn: 'bg-foreground-500' },
			{ name: '600', cn: 'bg-foreground-600' },
			{ name: '700', cn: 'bg-foreground-700' },
			{ name: '800', cn: 'bg-foreground-800' },
			{ name: '900', cn: 'bg-foreground-900' },
			{ name: 'Default', cn: 'bg-foreground' },
		],
	},
]

export const Page = ({}: Props) => {
	return (
		<>
			<PageHeader title={t('Color')} />

			<PageContent>
				<div className="space-y-2">
					<h3 className="font-bold">Semantic colors</h3>
					<div className="max-w-xs pt-3 space-y-8 sm:max-w-lg md:max-w-xl">
						{data.map(({ title, items }, idx) => (
							<Fragment key={`row${idx}`}>
								<Row {...{ title, items }} />
							</Fragment>
						))}
					</div>
				</div>

				<div className="space-y-2 mt-20">
					<h3 className="font-bold">JavaScript colors</h3>
					<p>
						You can import semantic and common colors into your JavaScript files
						as follows:
					</p>

					<Snippet size="sm" className="hidden md:inline-flex">
						{`import {commonColors, semanticColors} from "@nextui-org/theme";`}
					</Snippet>
					<p>Inspect this page to see the available colors.</p>
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

const Row = ({
	title,
	items,
}: {
	title: string
	items: { name: string; cn: string }[]
}) => (
	<div className="space-y-2">
		<div className="font-bold">{title}</div>
		<div className="w-auto grid grid-cols-3 gap-3 sm:grid-cols-5 xl:grid-cols-6">
			{items.map((e) => (
				<Fragment key={`row${e.cn}`}>
					<div className="space-y-1">
						<div
							className={`border border-gray-200 w-full aspect-video rounded-lg dark:border-gray-800 ${e.cn}`}
						/>
						<div className="text-sm font-semibold">{e.name}</div>
					</div>
				</Fragment>
			))}
		</div>
	</div>
)

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Color')) }} />
)

export default Page
