// import { useEffect } from 'react'
// import { AuthenticatedLayout } from '@/layouts'
// import { t } from '@/i18n'
// import { PageHeader } from '@/components'
// import { PageProps } from '@/types'
// import { useStoreMain } from '@/store'
import { useColorMode } from '@/hooks'
import { Head, Link } from '@inertiajs/react'

const Dashboard = () => {
	const { colorMode } = useColorMode()
	// const { setAuth } = useStoreMain()

	// useEffect(() => {
	// 	if (setAuth) setAuth(auth)
	// }, [])

	return (
		<>
			<Head title="Dashboard menu" />

			<div className="bg-gray-100 w-screen min-h-svh dark:bg-gray-900">
				<div className="max-w-5xl py-20 mx-auto">
					<div className="grid grid-cols-2 gap-x-20">
						<div>
							<Link
								href={route('dashboard.corporate')}
								className="space-y-3 leading-tight"
							>
								<div className="bg-slate-100 aspect-video"></div>
								<h3 className="text-xl font-bold">Corporate</h3>
								<p>
									The most popular layout with a sidebar menu section and all
									the flavor.
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

// Dashboard.layout = (page: JSX.Element) => (
// 	<AuthenticatedLayout {...{ children: page, pageTitle: t('Dashboard') }} />
// )

export default Dashboard
