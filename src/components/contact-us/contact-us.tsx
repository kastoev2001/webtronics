import ContactUsInput from '../contact-us-input/contact-us-input';

import { FormEvent, useState } from 'react';
import { fetchUserAction } from '../../store/user/user-process-action';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { checkEmail, checkName, checkPhone } from '../../utils/check/checkieFleds';

import styles from './ContactUs.module.css';
import { NewUser } from '../../types/user';

function ContactUs(): JSX.Element {
	const dispatch = useAppDispatch();
	const { userState } = useAppSelector((state) => state.user);
	const [isPhoneValid, setIsPhoneValid] = useState(true);
	const [isEmailValid, setIsEmailValid] = useState(true);
	const [isNameValid, setIsNameValid] = useState(true);
 
	const handlerFromSibmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		const formData = new FormData(evt.currentTarget);
		const phone = String(formData.get('phone'));
		const email = String(formData.get('email'));
		const name = String(formData.get('name'));
		
		const isNameValid = checkName(name);
		const isEmailValid = checkEmail(email);
		const isPhoneValid = checkPhone(phone);
		
		if (
			!isNameValid
		) {
			setIsNameValid(false);
		} else {
			setIsNameValid(true);
		}
		
		if (
			!isEmailValid
		) {
			setIsEmailValid(false);
		} else {
			setIsEmailValid(true);
		}

		if (
			!isPhoneValid
		) {
			setIsPhoneValid(false);
		} else {
			setIsPhoneValid(true);
		}

		if (isNameValid && isEmailValid  && isPhoneValid) {
			const newUser: NewUser = {
				phone,
				email,
				name,
			}
	
			console.log(newUser)
			dispatch(fetchUserAction(newUser));
		}
	}

	return (
		<section className={styles['contact-us']}>
			<div className={styles['container']}>
				<div className={styles['contact-us__wrapper']}>
					<h2 className={`${styles['small-title']} ${styles['contact-us--width']}`}>Contact  us</h2>
					<p className={`${styles['text']} ${styles['contact-us--width']}`}>Do you have any kind of help please contact with us.</p>
					<form className={`${styles['form']} ${styles['contact-us--width']}`} onSubmit={handlerFromSibmit}>
						<div className={styles['form__wrapper']}>
							<ContactUsInput
							isInputValid={isNameValid}
							inputAttributes={{
								type: "text",
								name: "name",
								placeholder: "name",
							}} />
							<ContactUsInput
							isInputValid={isPhoneValid}
							inputAttributes={{
								type: "number",
								name: "phone",
								placeholder: "phone",
							}}  />
							<ContactUsInput
							isInputValid={isEmailValid}
							inputAttributes={{
								type: "email",
								name: "email",
								placeholder: "email",
							}} />
							<button className={styles['button']} type="submit" disabled={userState.loading ? true : false} >Send</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;