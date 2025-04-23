import { Button } from '@/components'
import {
	RiBarChartHorizontalFill,
	RiCameraAiLine,
	RiHome6Line,
	RiMore2Fill,
	RiUser3Line,
} from 'react-icons/ri'

const navbarHeightClassName = 'h-14'

export const StickyNavbar = () => {
	return (
		<>
			<div
				className={`bg-white inset-x-0 bottom-0 fixed z-20 shadow-[-10px_0_14px_#000000/50] dark:bg-stone-950 ${navbarHeightClassName}`}
			>
				<div className="flex justify-center h-full">
					<div className="w-full max-w-lg h-full px-5 flex justify-between items-center">
						<Button variant="ghost" size="icon">
							<RiBarChartHorizontalFill />
						</Button>

						<Button variant="ghost" size="icon">
							<RiCameraAiLine />
						</Button>

						<Button size="lg" className="w-12 h-12 -mt-4">
							<RiHome6Line />
						</Button>

						<Button variant="ghost" size="icon">
							<RiUser3Line />
						</Button>

						<Button variant="ghost" size="icon">
							<RiMore2Fill />
						</Button>
					</div>
				</div>
			</div>

			{/* This is a simple spacer: */}
			<div className={`${navbarHeightClassName}`} />
		</>
	)
}
