import Layout from '@/layouts/webAppMobile/Layout'


const pageTitle = 'Laravel starter kit'

const Page = () => {
	return (
		<>
			
		</>
	)
}

Page.layout = (page: React.ReactNode) => (
	<Layout {...{ children: page, pageTitle: pageTitle }} />
)

export default Page
