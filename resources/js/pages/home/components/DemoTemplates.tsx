import { Link } from '@inertiajs/react'

export const DemoTemplates = () => {
	return (
		<section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
			<div className="mx-auto max-w-5xl px-6">
				<div className="flex items-center gap-x-4">
					<span className="text-caption">In different flavors</span>
					<div className="border-t flex-1" />
				</div>

				<div className="mt-12 gap-4 sm:grid sm:grid-cols-2">
					<div className="sm:w-2/5">
						<h2 className="text-3xl font-bold sm:text-4xl">
							4 different layouts
						</h2>
					</div>
					<div className="mt-6 sm:mt-0">
						<p>
							Explore our four distinct dashboard layouts designed to enhance
							your workflow. Each layout is carefully crafted with intuitive
							navigation, responsive design, and customizable components to
							perfectly suit your project requirements.
						</p>
					</div>
				</div>
				<div className="mt-12 md:mt-24">
					<div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
						{layouts.map((layout, index) => (
							<Link
								key={index}
								className="group overflow-hidden"
								href={route(layout.route)}
							>
								<img
									className="h-96 w-full rounded-md object-cover object-top duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl"
									src={layout.avatar}
									alt="team member"
									width="826"
									height="1239"
								/>
								<div className="px-2 pt-2 sm:pb-0 sm:pt-4">
									<div className="flex justify-between">
										<h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
											{layout.name}
										</h3>
										<span className="text-xs">_0{index + 1}</span>
									</div>
									<div className="mt-1 flex items-center justify-between">
										<span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
											{layout.role}
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

const layouts = [
	{
		name: 'Mobile',
		role: 'Responsive Interface',
		avatar:
			'https://res.cloudinary.com/dp6aca7dg/image/upload/v1743256301/afede3015a7485c41fdb6391f67b02ff_df0rmt.jpg',
		route: 'demo.mobile',
	},
	{
		name: 'Dashboard',
		role: 'Admin Control',
		avatar:
			'https://res.cloudinary.com/dp6aca7dg/image/upload/v1743255616/original-0c52230223e2de5b66d83d59dffae389_eqvkcx.webp',
		route: 'demo.dashboard',
	},
	{
		name: 'Mobile App Style',
		role: 'App-like Experience',
		avatar:
			'https://res.cloudinary.com/dp6aca7dg/image/upload/v1743256360/9edc905b47c9fd7948c243bd9e55753c_q57v3u.jpg',
		route: 'demo.mobile.webApp',
	},
]
