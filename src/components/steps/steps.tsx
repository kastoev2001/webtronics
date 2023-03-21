import { useEffect, useRef } from 'react';
import { renderBroderForStepsCardsElems } from '../../utils/render';

import styles from './Steps.module.css';

type StepsCardsElems = NodeListOf<HTMLDivElement>;

function Steps(): JSX.Element {
	const stepsListRef = useRef<null | HTMLDivElement>(null);
	const stepsCardWrapperClass = `.${styles['steps__card-wrapper']}`;
	useEffect(() => {
		const stepsListElems = stepsListRef.current;

		if (stepsListElems) {
			const stepCardWrappersElems = stepsListElems.querySelectorAll<HTMLElement>(stepsCardWrapperClass);
			renderBroderForStepsCardsElems(stepCardWrappersElems);
		}
	}, [stepsListRef]);

	return (
		<section className={styles['steps']}>
			<div className={styles['steps__wrapper']}>
				<ul className={styles['stars']}>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
				</ul>
				<h3 className={`${styles['small-title']} ${styles['steps']}`}>Steps</h3>
				<div className={styles['steps__list']} ref={stepsListRef}>
					<article className={styles['steps__card']}>
						<div className={styles['steps__card-wrapper']}>
							<h4 className={styles['steps__title']}>Step 1</h4>
							<h3 className={styles['small-title']}>Introduction to Front-End </h3>
							<p className={styles['text']}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
						</div>
					</article>
					<article className={styles['steps__card']}>
						<div className={styles['steps__card-wrapper']}>
							<h4 className={styles['steps__title']}>Step 2</h4>
							<h3 className={styles['small-title']}>Overview of Development</h3>
							<p className={styles['text']}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
						</div>
					</article>
					<article className={styles['steps__card']}>
						<div className={styles['steps__card-wrapper']}>
							<h4 className={styles['steps__title']}>Step 3</h4>
							<h3 className={styles['small-title']}>Introduction to Front-End </h3>
							<p className={styles['text']}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
						</div>
					</article>
					<article className={styles['steps__card']}>
						<div className={styles['steps__card-wrapper']}>
							<h4 className={styles['steps__title']}>Step 4</h4>
							<h3 className={styles['small-title']}>Overview of Development</h3>
							<p className={styles['text']}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
						</div>
					</article>
					<article className={styles['steps__card']}>
						<div className={styles['steps__card-wrapper']}>
							<h4 className={styles['steps__title']}>Step 5</h4>
							<h3 className={styles['small-title']}>Introduction to Front-End </h3>
							<p className={styles['text']}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
						</div>
					</article>
					<article className={styles['steps__card']}>
						<div className={styles['steps__card-wrapper']}>
							<h4 className={styles['steps__title']}>Step  6</h4>
							<h3 className={styles['small-title']}>Overview of Development</h3>
							<p className={styles['text']}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Steps;