import Layout from '@/layouts/mobile/Layout'
import { HeroParallax } from './components/webMobile'

const pageTitle = 'Laravel starter kit'

const Page = () => {
	return (
		<>
			<HeroParallax />
		</>
	)
}

Page.layout = (page: React.ReactNode) => (
	<Layout {...{ children: page, pageTitle: pageTitle }} />
)

export default Page
