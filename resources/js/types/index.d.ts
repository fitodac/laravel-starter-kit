import { Config } from 'ziggy-js'

import { NavbarProps } from './navbar'

export interface User {
	id: number
	name: string
	email: string
	email_verified_at: string
	address: string
	bio: string
	birth_date: string
	city: string
	company: string
	country: string
	job_title: string
	lastname: string
	phone: string
	profile_picture: string
	username: string
	status: string
	zip: string
	role?: string
	roles?: {
		created_at?: string
		guard_name: string
		id: number
		name: string
	}[]
	account: {
		colorMode: string
		language: string
	}
	sessions?: Sessions
}

export interface Users {
	current_page: number
	data: User[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string
	to: number
	total: number
	links: {
		url: string
		label: string
		active: boolean
	}[]
}

interface FlashMessages {
	success?: string
	error?: string
	info?: string
}

export interface PageProps {
	auth: {
		user: User | null
		permissions?: string[]
		notifications: Notification[]
	}
	adminNavbar: NavbarProps
	settings: {
		logo: string
	}
	adminCanImpersonate: boolean
	canResetPassword: boolean
	adminLayout: string
	authLayout: string
	colorMode: string
	flash?: FlashMessages
	status: any
	ziggy: Config & { location: string }
	errors: Errors & ErrorBag
	sessions: {
		id: string
		ip_address: string
		last_activity: number
	}[]
	[key: string]: any
}

interface InertiaResponse {
	props: PageProps
	[key: string]: any
}

export type Sessions = {
	id: string
	ip_address: string
	last_activity: string
	payload: string
	user_agent: string
	user_id: number
}[]

export type Notification = {
	id: string
	read_at?: string
	data?: any
}

export interface PaginatedData {
	current_page: number
	data: any[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: string | null
	path: string
	per_page: number
	prev_page_url: string | null
	to: number
	total: number
	links: {
		url: string
		label: string
		active: boolean
	}[]
}

export interface FlashMessage {
	success?: string
	error?: string
}
