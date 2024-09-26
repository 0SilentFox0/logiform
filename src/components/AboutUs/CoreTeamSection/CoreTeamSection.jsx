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
	{ name: "Serhiy Koval", title: "CEO", img: SERHIY, socialImg: [LINKEDIN, TWITTER], links: ['https://www.linkedin.com/in/koval-serhii/', 'https://x.com/darki_eth'] },
	{ name: "Andrii Spizhavka", title: "CTO", img: ANDRII, socialImg: [LINKEDIN], links: [''] },
	{ name: "Ty Smith", title: "Advisor & CCO", img: TY, socialImg: [LINKEDIN, TWITTER],  links: ['https://www.linkedin.com/in/ty-smith', 'https://x.com/TySmithHQ'] },
	{ name: "Anton Karakulin", title: "Web3 dev lead", img: ANTON, socialImg: [GIT],  links: ['https://github.com/sowell-owen'] },
	{ name: "Maria Osadcha", title: "Design Lead", img: MARIA, socialImg: [LINKEDIN],  links: ['https://www.linkedin.com/in/mari-osadcha/'] },
];

function CoreTeamSection() {
	return (
		<>
			<section className={styles.coreTeamSection}>
				<h1 className={styles.coreTeamTitle}>Core Team</h1>
				<div className={styles.coreTeamContent}>
					{teamMembers.map(({ name, title, img, socialImg, links }, index) => (
						<div key={index} className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={img} alt={name} />
							</div>
							<div className={styles.memberLinks}>
								{socialImg.map((social, i) => (
									<Link
										href={links?.[i] || "#"} // link check to ensure there's a URL
										key={i}
										target="_blank" // open link in a new tab
										rel="noopener noreferrer"
										className={styles.link}
									>
										<Image src={social} alt="social link" />
									</Link>
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