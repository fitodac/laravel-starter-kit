import { create } from 'zustand'
import type { State, Action } from '../types.d'
import { tabsMapper } from '../helpers/mappers/tabs.mapper'

export const useMediaMangerStore = create<State & Action>((set) => ({
	files: [],
	setFiles: (files) => set(() => ({ files })),

	filesTotal: 0,
	setFilesTotal: (total) => set(() => ({ filesTotal: total })),

	fileSelected: null,
	setFileSelected: (file) => set(() => ({ fileSelected: file })),

	onClose: () => {},
	setOnClose: (fn) => set(() => ({ onClose: fn, fileSelected: null })),

	tabsDisabled: [],
	enableTabs: () => set(() => ({ tabsDisabled: [] })),
	disableTabs: () =>
		set(() => ({
			tabsDisabled: [tabsMapper('TAB_UPLOAD'), tabsMapper('TAB_LIBRARY')],
		})),

	selectedTab: tabsMapper('TAB_LIBRARY'),
	setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
}))
