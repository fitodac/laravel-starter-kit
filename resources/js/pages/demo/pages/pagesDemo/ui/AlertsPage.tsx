import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { SemanticAlerts, SolidAlerts } from '@/pages/demo/componentsDemo'
import { ButtonsNavbar } from './components'

export const AlertsPage = () => {
	return (
		<>
			<PageHeader title={t('Alerts')}>
				<p className="font-bold leading-tight">
					Capture Attention with Engaging Alerts
				</p>
				<p className="text-sm mt-2">
					Alerts are essential UI components used to notify users of important
					information, warnings, or confirmations. They help capture attention
					and guide users through critical actions or updates, ensuring that key
					messages are conveyed effectively. Alerts can be styled to indicate
					success, errors, or general information, improving communication
					within an application.
				</p>
			</PageHeader>

			<PageContent
				aside={
					<ButtonsNavbar
						{...{
							menu: [
								{ key: 'semanticAlerts', label: 'Semantic alerts' },
								{ key: 'solidAlerts', label: 'Solid alerts' },
							],
						}}
					/>
				}
			>
				<div className="flex-1 max-w-lg space-y-14">
					<SemanticAlerts />
					<SolidAlerts />
				</div>
			</PageContent>
		</>
	)
}
