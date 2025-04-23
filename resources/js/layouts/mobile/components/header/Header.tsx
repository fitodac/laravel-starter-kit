import {
	Brand,
	buttonVariants,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components'
import { useWindowScrollPosition } from '@/hooks'
import { cn } from '@/lib/utils'
import { Link, usePage } from '@inertiajs/react'

import type { PageProps } from '@/types'

export const Header = () => {
	const { y } = useWindowScrollPosition({ throttleMs: 200 })
	const { auth } = usePage().props as PageProps

	return (
		<>
			<header
				className={cn(
					'py-4 flex justify-center top-0 inset-x-0 transition-all duration-300 sticky z-20 backdrop-blur-sm',
					y > 120 &&
						'bg-gray-950/60 border-b border-gray-100/15 backdrop-blur-sm'
				)}
			>
				<div className="flex justify-between flex-1 px-5">
					<div className="">
						<Brand classNames={{ image: 'h-5' }} />
					</div>

					<div className="flex items-center gap-5">
						{auth?.username ? (
							<>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<div className="flex gap-x-3 items-center select-none max-w-40">
											<div className="relative box-content flex items-center justify-center overflow-hidden rounded-full size-8 shrink-0">
												<img
													src={
														auth?.profile_picture ??
														`https://ui-avatars.com/api/?background=0086ff&color=fff&uppercase=false&name=${auth?.username}`
													}
													alt={auth?.username}
													className="aspect-square"
												/>
											</div>

											<div className="text-sm truncate">{auth?.username}</div>
										</div>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<a href={route('filament.admin.pages.profile')}>
											<DropdownMenuLabel>Profile</DropdownMenuLabel>
										</a>
										<a href={route('filament.admin.pages.account')}>
											<DropdownMenuLabel>Account</DropdownMenuLabel>
										</a>
										<DropdownMenuSeparator />
										<Link
											href={route('signout')}
											method="post"
											className="w-full"
										>
											<DropdownMenuItem>Sign out</DropdownMenuItem>
										</Link>
									</DropdownMenuContent>
								</DropdownMenu>
							</>
						) : (
							<>
								<a
									href={route('filament.admin.auth.login')}
									className={buttonVariants({ variant: 'ghost', size: 'sm' })}
								>
									Sign in
								</a>

								<a
									href={route('filament.admin.auth.register')}
									className={buttonVariants({ variant: 'glow', size: 'sm' })}
								>
									Get started today
								</a>
							</>
						)}
					</div>
				</div>
			</header>
		</>
	)
}

{
	/* <DropdownMenu.Root>
										<DropdownMenu.Trigger asChild>
											<Button variant="ghost" intent="gray" size="xs">
												<Button.Label className="max-w-24 text-right truncate">
													Hola {auth?.username}
												</Button.Label>
												<Button.Icon type="trailing">
													<RiArrowDropDownLine />
												</Button.Icon>
											</Button>
										</DropdownMenu.Trigger>

										<DropdownMenu.Portal>
											<DropdownMenu.Content
												mixed
												sideOffset={5}
												className="w-36"
											>
												<a href={route('filament.admin.pages.profile')}>
													<DropdownMenu.Item>Profile</DropdownMenu.Item>
												</a>
												<Link
													href={route('signout')}
													method="post"
													className="w-full"
												>
													<DropdownMenu.Item>Sign out</DropdownMenu.Item>
												</Link>
											</DropdownMenu.Content>
										</DropdownMenu.Portal>
									</DropdownMenu.Root> */
}
