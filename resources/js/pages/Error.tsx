import { useColorMode } from '@/hooks'
import { t } from '@/i18n'
import { Button } from '@nextui-org/react'
import { Link, Head } from '@inertiajs/react'

interface Props {
	status: number
}

type Messages =
	| {
			[key: number]: {
				pageTitle: string
				description: string
			}
	  }
	| any

const Page = ({ status }: Props) => {
	const { colorMode } = useColorMode()

	const messages: Messages = {
		503: {
			pageTitle: '503: Service Unavailable',
			description:
				'Sorry, we are doing some maintenance. Please check back soon.',
		},
		500: {
			pageTitle: '500: Server Error',
			description: 'Sorry, something went wrong on our servers.',
		},
		404: {
			pageTitle: '404: Page Not Found',
			description: 'Sorry, the page you are looking for could not be found.',
		},
		403: {
			pageTitle: '403: Forbidden',
			description: 'Sorry, you are forbidden from accessing this page.',
		},
	}[status]

	return (
		<>
			<Head title={`${t(messages?.pageTitle ?? '')}`} />

			<div className="bg-gray-100 w-screen h-screen dark:bg-gray-900">
				<div className="grid place-content-center w-full h-full p-10">
					<div className="flex flex-col gap-3 text-center max-w-2xl">
						<div className="text-6xl">{status}</div>

						<div className="text-2xl">{t(messages?.description)}</div>

						<div>
							{t('This page you are looking for does not exsist', {
								link: (
									<Link
										href={route('dashboard')}
										className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
									>
										{t('Report this?')}
									</Link>
								),
							})}
						</div>

						<div className="pt-6">
							<Button
								as={Link}
								color="primary"
								variant="flat"
								href={route('dashboard')}
							>
								Back home
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
