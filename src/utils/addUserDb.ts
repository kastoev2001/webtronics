import fs from 'fs';
import { User, NewUser } from '../types/user';
import { Db } from '../types/db'


export default function addUserDb(newUser: NewUser): User {
	const dbData = JSON.parse(fs.readFileSync('db.json', 'utf-8')) as unknown as Db;
	const newId = dbData.feedback.length + 1;
	const newUserChanged: User = {...newUser, id: newId}

	dbData.feedback.push(newUserChanged);

	fs.writeFileSync('db.json', JSON.stringify(dbData, null, 2), {encoding: 'utf-8'});

	return newUserChanged;
};
