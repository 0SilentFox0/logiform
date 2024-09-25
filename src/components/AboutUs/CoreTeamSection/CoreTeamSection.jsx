"use client";
import styles from "./CoreTeamSection.module.css";
import Image from "next/image";

import SERHIY from "@/assets/aboutUsImages/SERHIY.png";
import ANDRII from "@/assets/aboutUsImages/ANDRII.png";
import TY from "@/assets/aboutUsImages/TY.png";
import ANTON from "@/assets/aboutUsImages/ANTON.png";
import MARIA from "@/assets/aboutUsImages/MARIA.png";
import LINKEDIN from "@/assets/aboutUsImages/LINKEDIN.svg";
import TWITTER from "@/assets/aboutUsImages/TWITTER.svg";
import GIT from "@/assets/aboutUsImages/GIT.svg";
import Link from "next/link";

const teamMembers = [
	{ name: "Serhiy Koval", title: "CEO", img: SERHIY, links: [LINKEDIN, TWITTER] },
	{ name: "Andrii Spizhavka", title: "CTO", img: ANDRII, links: [LINKEDIN] },
	{ name: "Ty Smith", title: "Advisor & CCO", img: TY, links: [LINKEDIN, TWITTER] },
	{ name: "Anton Karakulin", title: "Web3 dev lead", img: ANTON, links: [GIT] },
	{ name: "Maria Osadcha", title: "Design Lead", img: MARIA, links: [LINKEDIN] },
];

function CoreTeamSection() {
	return (
		<>
			<section className={styles.coreTeamSection}>
				<h1 className={styles.coreTeamTitle}>Core Team</h1>
				<div className={styles.coreTeamContent}>
					{teamMembers.map(({ name, title, img, links }, index) => (
						<div key={index} className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={img} alt={name} />
							</div>
							<div className={styles.memberLinks}>
								{links.map((link, i) => (
									<span key={i} className={styles.link}>
										<Image src={link} alt="social link" />
									</span>
								))}
							</div>
							<div className={styles.memberInfo}>
								<h3>{name}</h3>
								<p>{title}</p>
							</div>
						</div>
					))}
				</div>
				<Link href="#contact" className={styles.contactButton}>
					Contact us
				</Link>
			</section>

			<section className={styles.valueSection}>
				<div className={styles.valueTitle}>
					<p>
						Deep expertise in both Web2 and Web3. Transparency, realistic timelines, and trust are at the core of our process.
					</p>
				</div>

			</section>
		</>
	)
}

export default CoreTeamSection;