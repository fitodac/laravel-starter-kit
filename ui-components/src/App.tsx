import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { Buttons } from './components'

const tabClassName =
	'text-stone-200 data-[state=active]:after:bg-primary truncate relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none'

export default function App() {
	return (
		<div className="bg-background text-stone-200 min-h-screen">
			<Tabs
				defaultValue="tab-buttons"
				orientation="vertical"
				className="w-full flex flex-row gap-0"
			>
				<TabsList className="w-1/6 flex-col rounded-none bg-transparent justify-start p-10 border-r-divider">
					<div className="sticky top-10">
						<TabsTrigger value="tab-buttons" className={tabClassName}>
							Buttons
						</TabsTrigger>
						<TabsTrigger value="tab-2" className={tabClassName}>
							Projects
						</TabsTrigger>
						<TabsTrigger value="tab-3" className={tabClassName}>
							Packages
						</TabsTrigger>
					</div>
				</TabsList>

				<div className="grow text-start">
					<TabsContent value="tab-buttons">
						<Buttons />
					</TabsContent>
					<TabsContent value="tab-2">
						<p className="text-muted-foreground px-4 py-3 text-xs">
							Content for Tab 2
						</p>
					</TabsContent>
					<TabsContent value="tab-3">
						<p className="text-muted-foreground px-4 py-3 text-xs">
							Content for Tab 3
						</p>
					</TabsContent>
				</div>
			</Tabs>
		</div>
	)
}
