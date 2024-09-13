import { Layout } from '@/layouts/admin/corporate/Layout'
import { PageHeader, PageContent } from '@/components'
import { PermissionsList, CreateEditForm, DeletePermission } from './components'
import { Button, useDisclosure } from '@nextui-org/react'
import { t } from '@/i18n'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

import type { Permission } from '@/types/permissions'

const Page = () => {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [selectedPermission, setSelectedPermission] =
		useState<Permission | null>(null)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<PageHeader title={t('Permissions')}>
				<div className="flex justify-end">
					<Button
						size="sm"
						color="primary"
						className="px-6"
						variant="flat"
						onPress={() => {
							setDrawerOpen(true)
							setSelectedPermission(null)
						}}
					>
						{t('Add new permission')}
					</Button>
				</div>
			</PageHeader>

			<PageContent>
				<PermissionsList
					{...{ setDrawerOpen, setSelectedPermission, onOpen }}
				/>
			</PageContent>

			<div className="h-20" />

			<Drawer
				{...{
					open: drawerOpen,
					direction: 'bottom',
					size: 370,
					duration: 250,
					className: '!bg-transparent flex !shadow-none',
				}}
			>
				<CreateEditForm
					{...{
						setDrawerOpen,
						selectedPermission,
						setSelectedPermission,
						drawerOpen,
					}}
				/>
			</Drawer>

			<DeletePermission
				{...{
					selectedPermission,
					setSelectedPermission,
					isOpen,
					onOpen,
					onOpenChange,
				}}
			/>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Permissions')) }} />
)

export default Page
