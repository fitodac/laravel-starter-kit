import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
				glow: `bg-linear-to-b from-primary/85 to-primary text-primary-foreground 
					inset-shadow-2xs inset-shadow-white/25 dark:from-primary/75 
					border border-zinc-950/35 shadow-md shadow-zinc-950/20 ring-0 
					transition-[filter] duration-200
					hover:brightness-110 active:brightness-95 
					dark:bg-linear-to-t dark:border-0 dark:border-zinc-950/50`,

				destructive:
					'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				outline:
					'bg-input border border-primary text-primary shadow-xs hover:bg-primary hover:text-accent-foreground dark:bg-input/30 dark:border-primary/80 dark:hover:bg-primary',
				secondary:
					'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
				ghost:
					'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
				link: 'text-primary underline-offset-4 hover:underline',
			},
			effect: {
				expandIcon: `gap-0 relative [&>.icon]:transition-all
					[&>.icon]:last:duration-200
					[&>.icon]:last:w-0 hover:[&>.icon]:last:w-5
					[&>.icon]:last:opacity-0 hover:[&>.icon]:last:opacity-100
					[&>.icon]:last:ml-0 hover:[&>.icon]:last:ml-1
					
					[&>.icon]:first:duration-200
					[&>.icon]:first:w-0 hover:[&>.icon]:first:w-5
					[&>.icon]:first:opacity-0 hover:[&>.icon]:first:opacity-100
					[&>.icon]:first:mr-0 hover:[&>.icon]:first:mr-1`,
				ringHover:
					'transition-all duration-300 hover:ring hover:ring-primary/90 hover:ring-offset-3',

				underline:
					'relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300',
				hoverUnderline:
					'relative !no-underline after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300',
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

interface IconRefProps {
	icon?: never
}

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
	isLoading?: boolean
}

export type ButtonIconProps = IconRefProps

const Button = forwardRef<HTMLButtonElement, ButtonProps & ButtonIconProps>(
	(
		{
			className,
			variant,
			effect,
			size,
			asChild = false,
			isLoading = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button'

		return (
			<Comp
				className={cn(
					buttonVariants({ variant, effect, size, className }),
					'select-none'
				)}
				data-slot="button"
				ref={ref}
				{...props}
			>
				{isLoading ? (
					<>
						<svg
							className="size-4 animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							></circle>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						<Slottable>{props.children}</Slottable>
					</>
				) : (
					<>
						<Slottable>{props.children}</Slottable>
					</>
				)}
			</Comp>
		)
	}
)

export { Button, buttonVariants }
