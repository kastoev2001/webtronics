import styles from './Footer.module.css';

function Footer(): JSX.Element {
	return (
		<footer className={styles['footer']}>
			<div className="container">
				<div className={styles['footer__wrapper']}>
					<div className={styles['footer__address']}>
						<div className={styles['logo']}>
							<div className={styles['logo__wrapper']}>
								<img className={styles['logo__image']} src="./images/icons/logo.png" />

							</div>
						</div>
						<p className={styles['text']}>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
					</div>
					<div className={styles['footer__nav']}>
						<h4 className={styles['footer__title']}>Company</h4>
						<nav className={styles['nav']}>
							<div className={styles['nav__wrapper']}>
								<ul className={styles['list']}>
									<li className={styles['line']}>
										<a className={styles['link']} href="#">About Us</a>
									</li>
									<li className={styles['line']}>
										<a className={styles['link']} href="#">Steps</a>
									</li>
									<li className={styles['line']}>
										<a className={styles['link']} href="#">FAQs</a>
									</li>
									<li className={styles['line']}>
										<a className={styles['link']} href="#">Review</a>
									</li>
									<li className={styles['line']}>
										<a className={styles['link']} href="#">Gallery</a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					<div className={styles['footer__socials']}>
						<h4 className={styles['footer__title']}>Social media</h4>
						<div className={styles['socials']}>
							<div className={styles['socials__wrapper']}>
								<ul className={styles['socials__list']}>
									<li className={`${styles['socials__line']} ${styles['socials__line--facebook']}`}></li>
									<li className={`${styles['socials__line']} ${styles['socials__line--git-lab']}`}></li>
									<li className={`${styles['socials__line']} ${styles['socials__line--twitter']}`}></li>
									<li className={`${styles['socials__line']} ${styles['socials__line--instagram']}`}></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;