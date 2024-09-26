// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Home/VisionSection/VisionSection.module.css";

// Import company logos
import MythicalLogo from "@/assets/companyLogos/mythical.png";
import NexoLogo from "@/assets/companyLogos/nexo.png";
import CoinboundLogo from "@/assets/companyLogos/coinbound.png";
import HalbornLogo from "@/assets/companyLogos/halborn.svg";
import ZivoeLogo from "@/assets/companyLogos/zivoe.svg";
import CoinscribbleLogo from "@/assets/companyLogos/coinscribble.svg";
import YourLogo from "@/assets/companyLogos/yourLogo.png";
import WewayLogo from "@/assets/companyLogos/weway.png";
import EdmundoLogo from "@/assets/companyLogos/edmundo.png";
import DeedyLogo from "@/assets/companyLogos/deedy.png";


// import NimiqLogo from "@/assets/companyLogos/nimiq.png";
// import TronLogo from "@/assets/companyLogos/tron.png";
// import OKXLogo from "@/assets/companyLogos/okx.png";
// import EtoroLogo from "@/assets/companyLogos/etoro.png";
// import KionlyLogo from "@/assets/companyLogos/kionly.png";

// Import feature icons
import MEDAL from "@/assets/cardsImages/medal.svg";
import LAMP from "@/assets/cardsImages/lamp.svg";
import GRAPH from "@/assets/cardsImages/graph.svg";
import LOCK from "@/assets/cardsImages/lock.svg";
import TARGET from "@/assets/cardsImages/target.svg";

// Import team avatars
import AVA1 from "@/assets/avatars/ava1.png";
import AVA2 from "@/assets/avatars/ava2.png";
import AVA3 from "@/assets/avatars/ava3.png";
import STARS from "@/assets/avatars/Star.png";

const companyLogos = [
	{ src: MythicalLogo, alt: "Mythical logo" },
	{ src: NexoLogo, alt: "Nexo logo" },
	{ src: CoinboundLogo, alt: "Coinbound logo" },
	{ src: HalbornLogo, alt: "Halborn logo" },
	{ src: ZivoeLogo, alt: "Zivoe logo" },
	{ src: CoinscribbleLogo, alt: "Coinscribble logo" },
	{ src: YourLogo, alt: "Your logo" },
	{ src: WewayLogo, alt: "Weway logo" },
	{ src: EdmundoLogo, alt: "Edmundo logo" },
	{ src: DeedyLogo, alt: "Deedy logo" },

	// { src: NimiqLogo, alt: "Nimiq logo" },
	// { src: TronLogo, alt: "Tron logo" },
	// { src: OKXLogo, alt: "OKX logo" },
	// { src: EtoroLogo, alt: "Etoro logo" },
	// { src: KionlyLogo, alt: "Kionly logo" },
];

const features = [
	{
		image: MEDAL,
		alt: "medal",
		title: "Web3 Experts",
		description:
			"A skilled team of blockchain developers, smart contract engineers, and UI/UX designers dedicated to Web3.",
	},
	{
		image: LAMP,
		alt: "lamp",
		title: "End-to-End Solutions",
		description:
			"From concept to deployment, we handle every aspect of your Web3 development journey.",
	},
	{
		image: GRAPH,
		alt: "graph",
		title: "Growth Focused",
		description:
			"We're not just builders; we're your strategic partners, helping you navigate the Web3 landscape and achieve your goals.",
	},
	{
		image: LOCK,
		alt: "lock",
		title: "Security First",
		description:
			"We prioritize the security and integrity of your decentralized applications, ensuring robust protection and reliability.",
	},
	{
		image: TARGET,
		alt: "target",
		title: "Proven Results",
		description:
			"We've successfully delivered a wide range of Web3 projects, from DeFi platforms to NFT marketplaces and beyond.",
	},
];

const statistics = [
	{ number: "20+", description: "People Onboard" },
	{ number: "50+", description: "Successfully Delivered Projects" },
	{ number: "60%", description: "Clients Who Came To Us By Referrals" },
];

function VisionSection() {
	return (
		<section className={styles.background}>
			<div className={styles.container}>
				{
					<div className={styles.logos}>
						<div className={styles.logosSlide}>
							{companyLogos.map((logo, index) => (
								<Image
									key={index}
									src={logo.src}
									alt={logo.alt}
									width={100}
									height={50}
								/>
							))}
						</div>
						<div className={styles.logosSlide}>
							{companyLogos.map((logo, index) => (
								<Image
									key={index + companyLogos.length}
									src={logo.src}
									alt={logo.alt}
									width={100}
									height={50}
								/>
							))}
						</div>
					</div>
				}

				<div className={styles.content}>
					<div className={styles.title}>
						<h2>Your Vision, Our Code</h2>
						<p>
							Focus on growing your business and community while we handle every
							aspect of your product, from industry best practices to coding.
						</p>
					</div>

					<div className={styles.features}>
						{features.map((feature, index) => (
							<div key={index} className={styles.feature}>
								<div className={styles.featureImage}>
									<Image
										src={feature.image}
										alt={feature.alt}
										width={50}
										height={50}
									/>
								</div>
								<div className={styles.featureInfo}>
									<h3>{feature.title}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className={styles.statisticsContainer}>
					<div className={styles.statistics}>
						{statistics.map((stat, index) => (
							<div key={index} className={styles.statistic}>
								<div className={styles.text}>
									<h2>{stat.number}</h2>
									<p>{stat.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className={styles.statisticsInfo}>
						<p>
							Logiform streamlines the development process, delivering clean,
							secure, and scalable code that brings your vision to life. Our
							expertise tackles projects of any complexity.
						</p>

						<div className={styles.rating}>
							<div className={styles.stars}>
								<span>★</span>
								<span>★</span>
								<span>★</span>
								<span>★</span>
								<span>★</span>
							</div>

							<Link
								href="#contact"
								className={styles.contactButton}
							>
								Contact us
							</Link>
						</div>
					</div>
				</div>

				{
					<div className={styles.teamBackground}>
						<div className={styles.teamContainer}>
							<div className={styles.agileTeamSection}>
								As an agile team
								<span className={styles.teamImages}>
									<Image
										src={AVA1}
										alt="Team member 1"
										width={40}
										height={40}
									/>
									<Image
										src={AVA2}
										alt="Team member 2"
										width={40}
										height={40}
									/>
									<Image
										src={AVA3}
										alt="Team member 3"
										width={40}
										height={40}
									/>
								</span>
								we cut through red tape and move quickly. We are dedicated,
								transparent, communicate clearly and honestly. Proudly reliable,
								we tackle challenges with strong technical skills and market
								expertise, delivering effective results
								<span className={styles.starsImage}>
									<Image src={STARS} alt="Stars" width={60} height={20} />
								</span>
							</div>
						</div>
					</div>
				}
			</div>
		</section>
	);
}

export default VisionSection;
