import en from './english'
import sp from './spanish'

type Translations = {
	en: { [index: string]: string }
	sp: { [index: string]: string }
	[key: string]: { [index: string]: string }
}

const translations: Translations = {
	en,
	sp,
}

/**
 * Function t() allows you to tranlate strings
 * from the translations object at i18n/translations.ts
 * @param str
 * @returns
 */
type Params = {
	[key: string]: string | React.ReactNode
}

export const t = (str: string, params: Params = {}): string | JSX.Element => {
	if (!str) return ''

	const translation = translations[window.locale ?? 'en'][str]

	if (typeof translation === 'string' && params) {
		// @ts-ignore
		return Object.keys(params).reduce((acc, key) => {
			const value = params[key]
			if (typeof value === 'string') {
				return acc.replace(new RegExp(`%${key}%`, 'g'), value)
			} else {
				return acc
					.split(new RegExp(`%${key}%`, 'g'))
					.flatMap((item, i, arr) =>
						i < arr.length - 1 ? [item, value] : item
					)
			}
		}, translation)
	}

	return translation ?? str
}
