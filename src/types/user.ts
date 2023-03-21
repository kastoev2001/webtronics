export type User = {
	id: number,
	email: string,
	name: string,
	phone: string,
}

export type NewUser = Omit<User, 'id'>;