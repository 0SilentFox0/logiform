import "../styles/global.css";
import styles from "@/components/App/App.module.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/logo.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Logiform</title>
			</head>
			<body>
				<div className={styles.headerWrapper}>
					<Header />
				</div>
				<div id="root">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
