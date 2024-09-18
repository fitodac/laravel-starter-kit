import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { ButtonsNavbar } from './components'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Avatar')}>
				<p className="font-bold leading-tight">
					Personalize User Experience with Custom Avatars
				</p>
				<p className="text-sm mt-2">
					Avatars are graphical representations of users, typically displayed as
					images, icons, or initials, and are commonly used in profiles, chat
					applications, and notifications. They help create a personal touch in
					user interfaces by visually representing individuals or accounts.
					Avatars enhance user recognition, making interactions more engaging
					and familiar.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ButtonsNavbar
						{...{
							menu: [
								// { key: 'solidButton', label: 'Solid button' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-xl space-y-14"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Avatar')) }} />
)

export default Page
