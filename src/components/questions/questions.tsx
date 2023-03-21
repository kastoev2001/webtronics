import { useEffect, useRef } from 'react';
import Question from '../question/question';

import styles from './Questions.module.css';

function Questions(): JSX.Element {
	const questionsListRef = useRef<null | HTMLUListElement>(null);

	return (
		<section className={styles['questions']}>
			<div className={styles['questions__wrapper']}>
				<ul className={styles['stars']}>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
				</ul>
				<div className={styles['questions__title-wrapper']}>
					<h3 className={styles['small-title']}>Frequently Asked Questions</h3>
				</div>
				<div className={styles['questions__left']}>
					<p className={`${styles['text']} ${styles['questions']}`}>Do you have any kind of questions? <br /> We are here to help.</p>
					<div className={styles['questions__wrapper-image']}>
						<img className={styles['questions__image']} src="./images/icons/exclamation-mark.svg" />

					</div>
				</div>
				<div className={styles['questions__right']}>
					<ul className={styles['questions__list']} ref={questionsListRef}>
						{Array.from({ length: 5 }, (_, index) => <Question isQuestionOpen={false} key={index} />)}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Questions;
