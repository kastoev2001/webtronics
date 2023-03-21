import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap&_v=20230207203547" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&amp;display=swap&_v=20230207203547" />
			</Head>
			<body className="body">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
