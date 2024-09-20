import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { User } from '@/types'

export interface MainStoreProps {
	colorMode: string
	setColorMode: (value: string) => void
	auth: { user: User | null }
	setAuth: (value: any) => void
	profileTab: string
	setProfileTab?: (value: string) => void
	sidebarOpen: boolean
	setSidebarOpen: (value: boolean) => void
}

export const useMainStore = create<MainStoreProps>()(
	persist(
		(set, get) => ({
			colorMode: localStorage.getItem('colorMode') || 'light',
			setColorMode: (colorMode: string) => {
				set({ colorMode })
			},
			auth: { user: null },
			setAuth: (auth: any) => set({ auth }),
			profileTab: 'profile',
			setProfileTab: (profileTab: string) => set({ profileTab }),
			sidebarOpen: false,
			setSidebarOpen: (sidebarOpen: boolean) => set({ sidebarOpen }),
		}),
		{
			name: 'store',
			storage: createJSONStorage(() => localStorage),
		}
	)
)
