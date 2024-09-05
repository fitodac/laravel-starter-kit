export type Image = {
	name: string
	uuid: string
	file_name: string
	preview_url: string
	original_url: string
	order: number
	custom_properties?: any[]
	extension: string
	size: number
}

export type State = {
	files?: Image[] | any[]
	filesTotal?: number
	fileSelected?: Image | null
	onClose?: () => void
	tabsDisabled?: string[]
	selectedTab?: string
}

export type Action = {
	setFiles?: (images: State['files']) => void
	setFilesTotal?: (total: State['filesTotal']) => void
	setFileSelected?: (image: State['fileSelected']) => void
	onClose?: () => void
	setOnClose?: (fn: () => void) => void
	disableTabs?: () => void
	enableTabs?: () => void
	setSelectedTab?: (tab: State['selectedTab']) => void
}

export interface MediaManagerContext {
	mediaGallery?: Image[] | null
	setMediaGallery?: (images: Image[]) => void
	selectedImage?: Image | null
	setSelectedImage?: (image: Image | null) => void
	csrfToken?: string
	setCsrfToken?: (token: string) => void
}
