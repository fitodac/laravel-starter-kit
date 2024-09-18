import { Layout } from '@/layouts/admin/corporate/Layout'
import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import {
	CardsBasic,
	CardBasicHeader,
	CardBasicFooter,
	CardBasicDivider,
	CardRadius,
	CardShadow,
	CardImage,
	CardActions,
	CardExtraFeatures,
} from '@/pages/demo/componentsDemo'
import { ButtonsNavbar } from './components'

export const Page = () => {
	return (
		<>
			<PageHeader title={t('Cards')}>
				<p className="font-bold leading-tight">
					Cards are versatile UI components that present information in a
					concise and visually appealing format.
				</p>
				<p className="text-sm mt-2">
					Each card is designed to be compact yet comprehensive, providing a
					snapshot of key details at a glance. The use of varied sizes allows
					for highlighting the most relevant information, ensuring that users
					can quickly identify important content.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ButtonsNavbar
						{...{
							menu: [
								{ key: 'basicCard', label: 'Basic card' },
								{ key: 'cardHeader', label: 'Card header' },
								{ key: 'cardFooter', label: 'Card footer' },
								{ key: 'cardWithDivider', label: 'Card with dividers' },
								{ key: 'borderRadius', label: 'Border radius' },
								{ key: 'shadowElevation', label: 'Shadow elevation' },
								{ key: 'images', label: 'Images & card styles' },
								{ key: 'pressable', label: 'Pressable card' },
								{ key: 'dismisable', label: 'Dismisable card' },
								{ key: 'updateContent', label: 'Update content' },
								{ key: 'resizable', label: 'Resizable' },
								{ key: 'disabled', label: 'Disabled' },
								{ key: 'scrolleableContent', label: 'Scrolleable content' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-lg space-y-14">
					<CardsBasic />
					<CardBasicHeader />
					<CardBasicFooter />
					<CardBasicDivider />
					<CardRadius />
					<CardShadow />
					<CardImage />
					<CardActions />
					<CardExtraFeatures />
				</div>

				<div className="h-20"></div>
			</PageContent>
		</>
	)
}

Page.layout = (page: JSX.Element) => (
	<Layout {...{ children: page, pageTitle: String(t('Cards')) }} />
)

export default Page
