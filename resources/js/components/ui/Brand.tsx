import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'

const imgSrc = '/img/brand.svg'
const appName = import.meta.env.VITE_APP_NAME || ''

type Props = {
	classNames?: {
		link?: string
		image?: string
	}
}

export const Brand = ({ classNames }: Props) => {
	return (
		<Link href={route('home')} className={cn('inline-block', classNames?.link)}>
			<img
				src={imgSrc}
				alt={appName}
				className={cn('w-24 h-auto', classNames?.image)}
			/>
			{appName && <span className="sr-only">{appName}</span>}
		</Link>
	)
}
