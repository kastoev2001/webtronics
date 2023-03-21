import styles from './AboutUs.module.css';

function AboutUs(): JSX.Element {
	return (
		<section className={styles['about-us']}>
			<div className={styles['about-us__wrapper']}>
				<ul className={styles['stars']}>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
				</ul>
				<div className={styles['about-us__title-wrapper']}>
					<h2 className={styles['title']}>About Us</h2>
				</div>
				<div className={styles['about-us__left']}>
					<h3 className={styles['small-title']}>Mentors</h3>
					<div className={styles['mentors-list']}>
						<article className={styles['mentor-card']}>
							<div className={styles['mentor-card__image-wrapper']}>
								<img className={styles['mentor-card__image']} src="./images/mentor.jpg" />

							</div>
							<h4 className={styles['mentor-card__title']}>Wade Warren</h4>
							<p className={styles['text']}>Front-end engineers work closely with designers</p>
						</article>
						<article className={`${styles['mentor-card']} ${styles['mentor-card--margin']}`}>
							<div className={styles['mentor-card__image-wrapper']}>
								<img className={styles['mentor-card__image']} src="./images/mentor-two.jpg" />

							</div>
							<h4 className={styles['mentor-card__title']}>Kristin Watson</h4>
							<p className={styles['text']}>Front-end engineers work closely with designers</p>
						</article>
						<article className={styles['mentor-card']}>
							<div className={styles['mentor-card__image-wrapper']}>
								<img className={styles['mentor-card__image']} src="./images/mentor-three.jpg" />

							</div>
							<h4 className={styles['mentor-card__title']}>Robert Fox</h4>
							<p className={styles['text']}>Front-end engineers work closely with designers</p>
						</article>
					</div>
				</div>
				<div className={styles['about-us-right']}>
					<p className={styles['text']}>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
