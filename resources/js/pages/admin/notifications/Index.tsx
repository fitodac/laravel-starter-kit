import { useContext } from 'react'
import { Layout } from '@/layouts/admin/Layout'
import { PageHeader, PageContent } from '@/components'
import { Button } from '@nextui-org/react'
import { t } from '@/i18n'
import { TemplatesList, EditForm } from './components'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {
	NotificationProvider,
	NotificationContext,
} from './providers/NotificationProvider'

import { NotificationContextProps } from '@/types/notifications'

const pageTitle = String(t('Notification templates'))

const Page = () => {
	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	return (
		<>
			<PageHeader title={pageTitle} />

			<PageContent>
				<TemplatesList />
			</PageContent>

			<div className="h-20" />

			<Drawer
				{...{
					open: state.drawerOpen,
					direction: 'bottom',
					size: '85%',
					duration: 250,
				}}
			>
				<EditForm />
			</Drawer>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<NotificationProvider>
		<Layout {...{ children: page, pageTitle }} />
	</NotificationProvider>
)

export default Page
