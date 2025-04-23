import Layout from '@/layouts/dashboard/Layout'
import { Cards, ChartAreaInteractive } from './components/dashboard'

const pageTitle = 'Laravel starter kit'

const Page = () => {
	return (
		<>
			<Cards />

			<div className="px-4 lg:px-6">
				<ChartAreaInteractive />
			</div>
		</>
	)
}

const Header = () => (
	<div className="flex-1 flex justify-between">
		<h1 className="text-base font-medium">Dashboard</h1>
	</div>
)

Page.layout = (page: React.ReactNode) => (
	<Layout {...{ children: page, pageTitle: pageTitle, header: <Header /> }} />
)

export default Page
