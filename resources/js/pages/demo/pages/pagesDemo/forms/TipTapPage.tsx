import { t } from '@/i18n'
import { PageHeader, PageContent } from '@/components'
import { Wysiwyg } from '@/components/form'

export const TipTapPage = () => {
	return (
		<>
			<PageHeader title={t('Wysiwyg')}>
				{/* 
				<p className="text-lg font-medium leading-tight">
					Beautifully designed buttons that enhance visual appeal and usability.
				</p>
				<p className="text-sm mt-2">
					Each button is intuitive and responsive, providing efficient access to
					key functions. These buttons offer a perfect blend of aesthetics and
					practicality, ensuring a seamless user experience.
				</p> 
				*/}
			</PageHeader>

			<PageContent
				aside={
					<ul>
						<li>Solid button</li>
						<li>Small button</li>
						<li>Large button</li>
					</ul>
				}
			>
				<div className="flex-1 max-w-xl space-y-14">
					<Wysiwyg
						{...{
							charactersLimit: 500,
							code: true,
							blockquote: true,
							headings: true,
							separator: true,
							lists: true,
							colorSelector: true,
						}}
					/>
				</div>
			</PageContent>
		</>
	)
}
