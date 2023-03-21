import styles from './Gallery.module.css';

function Gallery(): JSX.Element {
	return (
		<section className={styles['gallery']}>
			<div className={styles['gallery__wrapper']}>
				<ul className={styles['stars']}>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
					<li className={styles['star']}></li>
				</ul>
				<div className={styles['gallery__title-wrapper']}>
					<h3 className={styles['small-title']}>Gallery</h3>
				</div>
				<div className={styles['gallery-left']}>
					<p className={`${styles['text']} ${styles['gallery']}`}>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects. </p>
					<div className={styles['gallery__image-wrapper']}>
						<img className={styles['gallery__image']} src="./images/gallery-image.jpg" />

					</div>
				</div>
				<div className={styles['gallery-right']}>
					<div className={styles['gallery-right__top']}>
						<div className={styles['gallery-right__left']}>
							<div className={styles['gallery__image-wrapper']}>
								<img className={styles['gallery__image']} src="./images/gallery-image-two.jpg" />

							</div>
						</div>
						<div className={styles['gallery-right__right']}>
							<div className={styles['gallery__image-wrapper']}>
								<img className={styles['gallery__image']} src="./images/gallery-iamge-three.jpg" />

							</div>
							<div className={styles['gallery__image-wrapper']}>
								<img className={styles['gallery__image']} src="./images/gallery-image-four.jpg" />

							</div>
						</div>
					</div>
					<div className={styles['gallery-right__bottom']}>
						<p className={styles['text']}>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;