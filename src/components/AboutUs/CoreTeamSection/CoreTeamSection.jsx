"use client";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./CoreTeamSection.module.css";

import SERHIY from "@/assets/aboutUsImages/SERHIY.png";
import ANDRII from "@/assets/aboutUsImages/ANDRII.png";
import TY from "@/assets/aboutUsImages/TY.png";
import ANTON from "@/assets/aboutUsImages/ANTON.png";
import MARIA from "@/assets/aboutUsImages/MARIA.png";

import LINKEDIN from "@/assets/aboutUsImages/LINKEDIN.svg";
import TWITTER from "@/assets/aboutUsImages/TWITTER.svg";
import GIT from "@/assets/aboutUsImages/GIT.svg";
import Image from "next/image";

function CoreTeamSection() {
	return (
		<>
			<section className={styles.coreTeamSection}>
				<h1 className={styles.coreTeamTitle}>Core Team</h1>
				<div className={styles.coreTeamContent}>
					<div className={styles.teamMembers}>
						<div className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={SERHIY} alt={""} />
							</div>
							<span className={styles.memberLinks}>
								<span className={styles.link}>
									<Image src={LINKEDIN} />
								</span>
								<span className={styles.link}>
									<Image src={TWITTER} />
								</span>
							</span>
							<div className={styles.memberInfo}>
								<h3>Serhiy Koval</h3>
								<p>CEO</p>
							</div>
						</div>

						<div className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={ANDRII} alt={""} />
							</div>
							<span className={styles.memberLinks}>
								<span className={styles.link}>
									<Image src={LINKEDIN} />
								</span>
							</span>
							<div className={styles.memberInfo}>
								<h3>Andrii Spizhavka</h3>
								<p>CTO</p>
							</div>
						</div>

						<div className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={TY} alt={""} />
							</div>
							<span className={styles.memberLinks}>
								<span className={styles.link}>
									<Image src={LINKEDIN} />
								</span>
								<span className={styles.link}>
									<Image src={TWITTER} />
								</span>
							</span>
							<div className={styles.memberInfo}>
								<h3>Ty Smith</h3>
								<p>Advisor&CCO</p>
							</div>
						</div>
					</div>

					<div className={styles.teamMembers}>
						<div className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={ANTON} alt={""} />
							</div>
							<span className={styles.memberLinks}>
								<span className={styles.link}>
									<Image src={GIT} />
								</span>
							</span>
							<div className={styles.memberInfo}>
								<h3>Anton Karakulin</h3>
								<p>Web3 dev lead</p>
							</div>
						</div>

						<div className={styles.member}>
							<div className={styles.memberAvatar}>
								<Image src={MARIA} alt={""} />
							</div>
							<span className={styles.memberLinks}>
								<span className={styles.link}>
									<Image src={LINKEDIN} />
								</span>
							</span>
							<div className={styles.memberInfo}>
								<h3>Maria Osadcha</h3>
								<p>Design Lead</p>
							</div>
						</div>
					</div>
				</div>
				<AnchorLink href="#contact" className={styles.contactButton}>
					Contact us
				</AnchorLink>
			</section>

			<section className={styles.valueSection}>
				<div className={styles.valueTitle}>
					<p>
						Deep expertise in both Web2 and Web3. Transparency, realistic
						timelines, and trust are at the core of our process.
					</p>
				</div>
			</section>
		</>
	);
}

export default CoreTeamSection;
