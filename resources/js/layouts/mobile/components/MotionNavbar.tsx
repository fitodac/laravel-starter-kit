import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
	RiHeartLine,
	RiHome6Line,
	RiSearchLine,
	RiSettings4Line,
	RiUser3Line,
} from 'react-icons/ri'

interface NavItemProps {
	icon: React.ReactNode
	isActive?: boolean
	onClick: () => void
}

const NavItem = ({ icon, isActive, onClick }: NavItemProps) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'relative flex h-12 flex-1 items-center justify-center rounded-full',
				isActive ? 'text-white' : 'text-slate-400'
			)}
		>
			{isActive && (
				<motion.div
					layoutId="bubble"
					className="absolute inset-0 bg-gradient-to-t from-primary/75 to-primary rounded-lg"
					transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
				/>
			)}
			<span className="relative text-xl">{icon}</span>
		</button>
	)
}

export const MotionNavbar = () => {
	const [activeTab, setActiveTab] = useState(0)

	const tabs = [
		{ icon: <RiHome6Line />, route: 'home' },
		{ icon: <RiSearchLine />, route: 'search' },
		{ icon: <RiHeartLine />, route: 'favorites' },
		{ icon: <RiUser3Line />, route: 'profile' },
		{ icon: <RiSettings4Line />, route: 'settings' },
	]

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50">
			<div className="mx-auto max-w-lg">
				<div className="flex items-center bg-white p-2 shadow-lg dark:bg-slate-900">
					{tabs.map((tab, index) => (
						<NavItem
							key={index}
							icon={tab.icon}
							isActive={activeTab === index}
							onClick={() => setActiveTab(index)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
