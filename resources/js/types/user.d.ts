export type UserForm = {
	name: string
	lastname: string
	username: string
	email: string
	password: string
	role: number
	status: 'enabled' | 'disabled'
	send_details: boolean
	basic_information: boolean
}
