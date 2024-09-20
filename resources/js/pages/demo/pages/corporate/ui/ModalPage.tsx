import { useState } from 'react'
import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { ButtonsNavbar } from './components'
import { ModalPage } from '@/pages/demo/pages/pagesDemo/ui/ModalPage'

export const Page = () => <ModalPage />

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Modal')) }} />
)

export default Page
