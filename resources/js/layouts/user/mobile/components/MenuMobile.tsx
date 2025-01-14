import { cn, Button, type ButtonProps } from '@nextui-org/react'
import { Link } from '@inertiajs/react'
import { t } from '@/i18n'
import { templates, theme } from '@/config'

const { mobile: template } = templates

export const MenuMobile = () => {
	return (
		<div
			className={cn(
				'bg-content1 border-t border-content3',
				'inset-x-0 bottom-0 fixed shadow-xl z-20'
			)}
		>
			<nav className="flex justify-between">
				<Button href={route('dashboard')} {...buttonProps}>
					<i className="ri-home-line ri-lg mt-1" />
					<span className="text-xs mt-1">{t('Dashboard')}</span>
				</Button>

				<Button href={route('dashboard')} {...buttonProps}>
					<i className="ri-book-open-line ri-lg mt-1" />
					<span className="text-xs mt-1">{t('Menu')}</span>
				</Button>

				<Button href={route('dashboard')} {...buttonProps}>
					<i className="ri-store-3-line ri-lg mt-1" />
					<span className="text-xs mt-1">{t('Stores')}</span>
				</Button>

				<Button href={route('profile.edit')} {...buttonProps}>
					<i className="ri-user-line ri-lg mt-1" />
					<span className="text-xs mt-1">{t('Profile')}</span>
				</Button>
			</nav>
		</div>
	)
}

const buttonProps = {
	fullWidth: true,
	isIconOnly: true,
	variant: 'light',
	radius: 'none',
	as: Link,
	className: 'flex-1 flex-col h-14',
} as ButtonProps
