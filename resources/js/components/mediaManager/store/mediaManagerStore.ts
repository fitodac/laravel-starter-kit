import { create } from 'zustand'
import type { State, Action } from '../types.d'

export const useMediaMangerStore = create<State & Action>((set) => ({
	files: [],
	setFiles: (files) => set(() => ({ files })),

	onClose: () => {},
	setOnClose: (fn) => set(() => ({ onClose: fn })),

	tabsEnabled: [],
	setTabsEnabled: (tabsEnabled) => set(() => ({ tabsEnabled })),
}))
