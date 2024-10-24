import "../styles/global.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import BackToTopButton from "@/components/layout/BackToTopButton/BackToTopButton";

export const metadata = {
	title: "Logiform - Agile Secure Solutions",
	description:
		"We provide agile secure solutions for web 3 and beyond. No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies.",
	keywords:
		"web3 development, blockchain development, smart contracts, DApp development, NFT marketplace development, ethereum development, solidity programming, blockchain consulting, web3 agency, cryptocurrency solutions, defi hedge funds, retrodrop crypto, layer 1 blockchain comparison",
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
		alternates: {
			canonical: "/",
		},
		metadataBase: new URL("https://logiform.io"),
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
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
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="safari-pinned-tab.svg" color="#36879e" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
                            (function(w,d,s,l,i){
                                w[l]=w[l]||[];
                                w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});
                                var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                                j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                                f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-NJ4HL2D9');
                            `,
					}}
				/>
			</head>
			<body>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-NJ4HL2D9"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
				<Header />
				<main>
					<div id="root">{children}</div>
				</main>
				<Footer />
				<BackToTopButton />
			</body>
		</html>
	);
}
