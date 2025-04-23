'use client'

import { useEffect, useState } from 'react'
import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'

interface Props {
	children: string
	lang: BundledLanguage
}

export function CodeBlock(props: Props) {
	const [html, setHtml] = useState<string>('')
	const [isLoading, setIsLoading] = useState(true)
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		const highlightCode = async () => {
			try {
				const out = await codeToHtml(props.children, {
					lang: props.lang,
					theme: 'github-dark-high-contrast',
				})
				setHtml(out)
			} catch (error) {
				console.error('Error highlighting code:', error)
			} finally {
				setIsLoading(false)
			}
		}

		highlightCode()
	}, [props.children, props.lang])

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(props.children)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (err) {
			console.error('Failed to copy code:', err)
		}
	}

	if (isLoading) {
		return (
			<div className="bg-stone-950/5 flex items-center justify-center p-4 h-20 rounded-lg dark:bg-stone-50/5">
				<div className="text-sm text-stone-500 dark:text-stone-400">
					Loading...
				</div>
			</div>
		)
	}

	return (
		<div className="relative overflow-hidden bg-stone-950 rounded-lg">
			<div className="flex items-center justify-between px-4">
				<div className="flex h-10 items-center gap-2">
					<div className="text-xs text-stone-400">{props.lang}</div>
				</div>
				<button
					onClick={copyToClipboard}
					className="flex h-8 items-center rounded-lg px-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-stone-800 text-stone-300"
				>
					{copied ? (
						<>
							<svg
								className="mr-2 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							Copied!
						</>
					) : (
						<>
							<svg
								className="mr-2 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
								/>
							</svg>
							Copy
						</>
					)}
				</button>
			</div>
			<div className="group relative">
				<div className="overflow-x-auto p-4 text-sm font-mono">
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</div>
	)
}
