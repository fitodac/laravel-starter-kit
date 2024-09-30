import { Layout } from '@/layouts/admin/corporate/Layout'
import { PageHeader, PageContent } from '@/components'
import { Button, cn } from '@nextui-org/react'
import { t } from '@/i18n'
import { NotificationsList, CreateEditForm } from './components'
import { useContext } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {
	NotificationProvider,
	NotificationContext,
} from './providers/notificationProvider'

import { NotificationContextProps } from '@/types/notifications'

const Page = () => {
	const { state, dispatch } = useContext(
		NotificationContext
	) as NotificationContextProps

	return (
		<>
			<PageHeader title={t('Notifications')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						onPress={() => {
							dispatch({ type: 'openDrawer' })
							dispatch({ type: 'setSelectedNotification', payload: null })
						}}
					>
						{t('New notification')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<NotificationsList />
			</PageContent>

			<div className="h-20" />

			<Drawer
				{...{
					open: state.drawerOpen,
					direction: 'bottom',
					size: '80%',
					duration: 250,
					// className: cn(state.drawerOpen ? 'block' : 'hidden'),
				}}
			>
				<CreateEditForm />
			</Drawer>

			{/* <DeletePermission
				{...{
					selectedPermission,
					setSelectedPermission,
					isOpen,
					onOpen,
					onOpenChange,
				}}
			/> */}
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<NotificationProvider>
		<Layout {...{ children: page, pageTitle: String(t('Notifications')) }} />
	</NotificationProvider>
)

export default Page
