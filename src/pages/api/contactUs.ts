import nextConnection from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import {checkFieleds} from '../../utils/check/checkieFleds';
import addUserDb from '../../utils/addUserDb';
import { NewUser } from '../../types/user';

const contactUsHandler = nextConnection<NextApiRequest, NextApiResponse>();

contactUsHandler.post((req, res) => {
	const data: NewUser = req.body;
	const isCheckFieleds = checkFieleds(data);
	if (
		!isCheckFieleds
	) {
		return res.status(403).json(({ message: 'Some reqierd fieled are missing.' }));
	}

	try {
		const newUser = addUserDb(data);

		res.status(201).json({ newUser })
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'ContactUd post error.' });
	}
});

export default contactUsHandler;