import styles from "./ApproachSection.module.css";

import SERHIY from "@/assets/aboutUsImages/SERHIY.png";
import ANDRII from "@/assets/aboutUsImages/ANDRII.png";
import TY from "@/assets/aboutUsImages/TY.png";
import ANTON from "@/assets/aboutUsImages/ANTON.png";
import MARIA from "@/assets/aboutUsImages/MARIA.png";

import DEPLOYMENT from "@/assets/aboutUsImages/deployment.png";
import FACTORY from "@/assets/aboutUsImages/factory.png";
import SECURITY from "@/assets/aboutUsImages/security.svg";
import Image from "next/image";

function ApproachSection() {
	return (
		<section className={styles.approachSection}>
			<div className={styles.approachTitle}>
				<h1>Logiform’s Approach</h1>
				<p>
					Comprehensive Web3 Solutions: Expert Team, Strategic Guidance, and
					Security-First Approach for Your Blockchain Success.
				</p>
			</div>

			<div className={styles.approachContent}>
				<div className={styles.approachRow}>
					<div className={styles.approachFirstCard}>
						<h3 className={styles.approachCardTitle}>
							Focus on growing your business and community while we handle every
							aspect of your product, from industry best practices to coding
						</h3>
					</div>

					<div className={styles.approachCard}>
						<div className={styles.approachCardText}>
							<h3 className={styles.approachCardTitle}>Skilled Team</h3>
							<p>
								Blockchain developers, smart contract engineers, UI/UX
								designers, all dedicated to Web3.
							</p>
						</div>
						<div className={styles.approachCardImage}>
							<Image src={SERHIY} className={styles.approachMemberAva} />
							<Image src={ANDRII} className={styles.approachMemberAva} />
							<Image src={TY} className={styles.approachMemberAva} />
							<Image src={ANTON} className={styles.approachMemberAva} />
							<Image src={MARIA} className={styles.approachMemberAva} />
						</div>
					</div>

					<div className={styles.approachCard}>
						<div className={styles.approachCardText}>
							<h3 className={styles.approachCardTitle}>
								From concept to deployment, we manage the entire journey.
							</h3>
						</div>
						<div className={styles.approachCardImage}>
							<Image
								className={styles.deploymentImage}
								height={99}
								src={DEPLOYMENT}
							/>
						</div>
					</div>
				</div>

				<div className={styles.approachSecondRow}>
					<div className={styles.approachCard}>
						<div className={styles.approachCardText}>
							<h3 className={styles.approachCardTitle}>Strategic Partners</h3>
							<p>
								not just developers—we guide you through the Web3 landscape.
							</p>
						</div>
						<div className={styles.approachCardImage}>
							<Image
								className={styles.factoryImg}
								height={212}
								width={200}
								src={FACTORY}
							/>
						</div>
					</div>

					<div className={styles.approachCard}>
						<div className={styles.approachCardText}>
							<h3 className={styles.approachCardTitle}>
								Security-first approach
							</h3>
							<p>ensuring reliable, decentralized apps.</p>
						</div>
						<div className={styles.approachCardImage}>
							<Image
								className={styles.securityImage}
								height={180}
								src={SECURITY}
							/>
						</div>
					</div>

					<div className={styles.approachLastCard}>
						<h3 className={styles.approachCardTitle}>
							Proven track record with DeFi platforms, NFT marketplaces, and
							more.
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ApproachSection;
