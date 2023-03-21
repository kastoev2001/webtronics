import Header from '../components/header/header';
import AboutUs from '../components/about-us/about-us';
import Technologies from '../components/technologies/technologies';
import Steps from '../components/steps/steps';
import Questions from '../components/questions/questions';
import Review from '../components/review/review';
import Gallery from '../components/gallery/gallery';
import ContactUs from '../components/contact-us/contact-us';
import Footer from '../components/footer/footer';


import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
	return (
		<>
			<Head>
				<title>Webtronics</title>
				<meta name="description" content="Webtronics" />
			</Head>
			<Header />
			<main className={styles["main"]}>
				<div className="container">
					<div className="main__wrapper">
						<AboutUs />
						<Technologies />
						<Steps />
						<Questions />
						<Review />
						<Gallery />
					</div>
				</div>
			</main>

			<ContactUs />
			<Footer />
		</>
	)
}
