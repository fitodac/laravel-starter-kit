import { create } from 'zustand'
import { tabsMapper } from '../helpers/mappers/tabs.mapper'

import type { State, Action } from '../types.d'

export const useMediaMangerStore = create<State & Action>((set) => ({
	files: [],
	setFiles: (files) => set(() => ({ files })),

	collection: null,
	setCollection: (data) => {
		console.log('data', Array.isArray(data))

		// set(() => ({ collection: data ? [...data] : null }))
		set(() => ({ collection: data }))
	},

	filesTotal: 0,
	setFilesTotal: (total) => set(() => ({ filesTotal: total })),

	fileSelected: null,
	setFileSelected: (file) => set(() => ({ fileSelected: file })),

	tabsDisabled: [],
	enableTabs: () => set(() => ({ tabsDisabled: [] })),
	disableTabs: () =>
		set(() => ({
			tabsDisabled: [tabsMapper('TAB_UPLOAD'), tabsMapper('TAB_LIBRARY')],
		})),

	selectedTab: tabsMapper('TAB_LIBRARY'),
	setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),

	selectMultiple: false,
	setSelectMultiple: (value) => set(() => ({ selectMultiple: value })),
}))
