import { usePage } from '@inertiajs/react'

interface ReplaceParams {
	[key: string]: string | number
}

interface LocaleMethods {
	__(key: string, replace?: ReplaceParams): string
}

// Hook for use in components
export const useLocale = (): { methods: LocaleMethods } => {
	const page = usePage()

	return {
		methods: {
			/**
			 * Translate the given key.
			 */
			__(key: string, replace: ReplaceParams = {}): string {
				// Access language data from the Inertia page props
				const language = page.props.language || {}
				const translation = (language as Record<string, string>)[key] || key

				return Object.keys(replace).reduce((result, paramKey) => {
					return result.replace(`:${paramKey}`, String(replace[paramKey]))
				}, translation)
			},
		},
	}
}

// Plain object for app-level use
export const locale = {
	methods: {
		__(key: string, replace: ReplaceParams = {}): string {
			// This version will be used at the app level where page might not be available yet
			return key
		}
	}
}