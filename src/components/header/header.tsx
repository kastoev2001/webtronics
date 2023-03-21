import styles from './Header.module.css';

function Header(): JSX.Element {
	return (
		<header className={styles["header"]}>
			<div className="container">
				<div className={styles["header__wrapper"]}>
					<section className={styles["header__top"]}>
						<div className={styles["logo"]}>
							<div className={styles["logo__wrapper"]}>
								<img className={styles["logo__image"]} src="./images/icons/logo.png" />
							</div>
						</div>
						<nav className={styles["nav"]}>
							<div className={styles["nav__wrapper"]}>
								<ul className={styles["list"]}>
									<li className={styles["line"]}><a className={styles["link"]} href="#">About</a></li>
									<li className={styles["line"]}><a className={styles["link"]} href="#">Programs</a></li>
									<li className={styles["line"]}><a className={styles["link"]} href="#">Steps</a></li>
									<li className={styles["line"]}><a className={styles["link"]} href="#">Questions</a></li>
									<li className={styles["line"]}><a className={styles["link"]} href="#">Get in touch</a></li>
								</ul>
							</div>
						</nav>
					</section>
					<section className={styles["header__bottom"]}>
						<h1 className={styles["header__title"]}>Front-End</h1>
						<p className={styles["text"]}>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). </p>
						<button className={`${styles["button"]} ${styles["header"]}`}>Start my career change</button>
						<h1 className={styles["header__title"]}>Developer</h1><span className={styles["header__span"]}>Courses</span>
					</section>
				</div>
			</div>
		</header>
	);
}


export default Header;