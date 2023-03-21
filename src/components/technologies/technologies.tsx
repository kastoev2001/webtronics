import Technologie from '../technologie/technologie';

import styles from './Technologies.module.css';

function Technologies(): JSX.Element {
	const Technologies = {
		AGNULAR: 'angular',
		REACT: 'react',
		VUE: 'vue',
		JAVASCRIPT: 'java-script',
	} as const;

	return (
		<section className={styles['technologies']}>
			<div className={styles['technologies__wrapper']}>
				<ul className={styles['stars']}>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
				</ul>
				<h3 className={styles['small-title']}>Programming technologies</h3>
				<p className={styles['text']}> By the end, you’ll have the portfolio and interview skills you need to start your new career.</p>
				<ul className={styles['technologies__list']}>
					{
						Object.values(Technologies).map((technologie) => (<Technologie key={technologie} technologie={technologie} />))
					}
				</ul>
			</div>
		</section>
	);
}

export default Technologies;