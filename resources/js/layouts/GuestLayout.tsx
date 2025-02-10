import { PropsWithChildren } from 'react'
import { Head } from '@inertiajs/react'
import { useColorMode } from '@/hooks'
import { Toastify } from '@/components'

type PropsLayout = {
	pageTitle: string
} & PropsWithChildren

export const GuestLayout = ({ children, pageTitle }: PropsLayout) => {
	const { colorMode } = useColorMode()

	return (
		<>
			<Head title={pageTitle} />

			<main className="bg-background w-full min-h-svh">{children}</main>

			<Toastify {...{ colorMode }} />
		</>
	)
}
