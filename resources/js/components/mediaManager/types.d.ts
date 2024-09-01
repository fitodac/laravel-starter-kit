export type Image = {
	id?: number
	name?: string
	filepath?: string
	alt?: string
	caption?: string
	created_at?: string
	updated_at?: string
}

export type State = {
	files?: Image[] | any[]
	onClose?: () => void
	tabsEnabled?: string[]
}

export type Action = {
	setFiles?: (images: State['files']) => void
	onClose?: () => void
	setOnClose?: (fn: () => void) => void
	setTabsEnabled?: (tabsEnabled: State['tabsEnabled']) => void
}

export interface MediaManagerContext {
	mediaGallery?: Image[] | null
	setMediaGallery?: (images: Image[]) => void
	selectedImage?: Image | null
	setSelectedImage?: (image: Image | null) => void
	csrfToken?: string
	setCsrfToken?: (token: string) => void
}
