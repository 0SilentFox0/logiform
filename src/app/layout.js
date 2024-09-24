import "../styles/global.css";
import styles from "@/components/App/App.module.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata = {
	title: "Logiform - Agile Secure Solutions",
	description:
		"We provide agile secure solutions for web 3 and beyond. No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies.",
	openGraph: {
		title: "Logiform - Agile Secure Solutions",
		description:
			"We provide agile secure solutions for web 3 and beyond. No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies.",
		url: "https://logiform.io",
		type: "website",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Logiform - Agile Secure Solutions",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="favicon-16x16.png"
				/>
				<link rel="manifest" href="site.webmanifest" />
				<link rel="mask-icon" href="safari-pinned-tab.svg" color="#36879e" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
