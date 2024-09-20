import { Layout } from '@/layouts/admin/executive/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Link } from '@inertiajs/react'

interface Props {}

const Page = ({}: Props) => {
	return (
		<>
			<PageHeader
				title={t('Dashboard')}
				classNames={{ wrapper: 'max-w-screen-xl px-6' }}
			/>

			<PageContent className="max-w-screen-xl mx-auto">
				Dashboard executive
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Dashboard')) }} />
)

export default Page
