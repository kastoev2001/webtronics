import Validator from 'validatorjs';
import { NewUser } from '../../types/user';

export const checkFieleds =(data: NewUser): boolean => {
	const rules = {
		name: 'required|string',
		email: 'required|email',
		phone: ['required', 'regex:/^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$/']
	}
	const validator = new Validator(data, rules);

	const isValidFieleds = validator.passes() ? true : false;

	return isValidFieleds;
};

export const checkName = (name: string): boolean => {
  const isNameValid = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/.test(name)

  return isNameValid;
}

export const checkEmail = (email: string): boolean => {
  const isEmailValid = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(email);

  return isEmailValid;
};

export const checkPhone = (phone: string): boolean => {
  const isPhoneValid = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);

  return isPhoneValid;
};

