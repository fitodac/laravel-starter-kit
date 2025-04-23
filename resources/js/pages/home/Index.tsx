import Layout from '@/layouts'
import { DemoTemplates, Hero } from './components'

const pageTitle = 'Laravel starter kit'

const Page = () => {
	return (
		<>
			<Hero />
			<DemoTemplates />
		</>
	)
}

Page.layout = (page: React.ReactNode) => (
	<Layout {...{ children: page, pageTitle: pageTitle }} />
)

export default Page
