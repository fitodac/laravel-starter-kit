import { forwardRef, Ref, useMemo } from 'react'

import { useInput, type InputProps, cn } from '@nextui-org/react'

export const ClassicInput = forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	InputProps
>((props, ref) => {
	const {
		Component,
		label,
		domRef,
		description,
		isClearable,
		startContent,
		endContent,
		shouldLabelBeOutside,
		shouldLabelBeInside,
		errorMessage,
		getBaseProps,
		getLabelProps,
		getInputProps,
		getInnerWrapperProps,
		getInputWrapperProps,
		getDescriptionProps,
		getErrorMessageProps,
		getClearButtonProps,
	} = useInput({
		...props,
		ref: ref as Ref<HTMLInputElement | HTMLTextAreaElement>,
		// this is just for the example, the props bellow should be passed by the parent component
		// label: 'Search',
		// type: 'search',
		// placeholder: 'Type to search...',
		labelPlacement: 'outside',
		// startContent: (
		// 	<SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
		// ),
		// custom styles
		classNames: {
			label: cn(
				'absolute left-1 -translate-y-3',
				'group-data-[filled-within=true]:-translate-y-3 group-data-[filled-within=true]:left-1',
				props.size === 'sm' && '-top-2',
				(props.size === undefined || props.size === 'md') && '-top-3',
				props.size === 'lg' && '-top-4'
			),
		},
	})

	const labelContent = <label {...getLabelProps()}>{label}</label>

	const end = useMemo(() => {
		if (isClearable) {
			return (
				<span {...getClearButtonProps()}>
					{endContent || <i className="ri-close-line"></i>}
				</span>
			)
		}

		return endContent
	}, [isClearable, getClearButtonProps])

	const innerWrapper = useMemo(() => {
		if (startContent || end) {
			return (
				<div {...getInnerWrapperProps()}>
					{startContent}
					<input {...getInputProps()} />
					{end}
				</div>
			)
		}

		return <input {...getInputProps()} />
	}, [startContent, end, getInputProps, getInnerWrapperProps])

	return (
		<Component {...getBaseProps()}>
			{shouldLabelBeOutside ? labelContent : null}
			<div
				{...getInputWrapperProps()}
				role="button"
				onClick={() => {
					domRef.current?.focus()
				}}
			>
				{shouldLabelBeInside ? labelContent : null}
				{innerWrapper}
			</div>
			{description && <div {...getDescriptionProps()}>{description}</div>}
			{errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
		</Component>
	)
})
