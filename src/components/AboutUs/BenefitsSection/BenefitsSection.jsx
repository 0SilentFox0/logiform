import styles from "./BenefitsSection.module.css";

import LINE from "@/assets/aboutUsImages/LINE.svg";
import CODE from "@/assets/aboutUsImages/CODE.svg";
import DEV from "@/assets/aboutUsImages/DEV.svg";
import STARS from "@/assets/aboutUsImages/STARS.png";
import Image from "next/image";

function BenefitsSection() {
	return (
		<section className={styles.background}>
			<div className={styles.benefitsSection}>
				<div className={styles.benefits}>
					<div className={styles.benefitPeople}>
						<div className={styles.benefitContent}>
							<h3 className={styles.benefitTitle}>People onboard</h3>
							<div className={styles.benefitNumber}>20+</div>
						</div>
					</div>

					<div className={styles.benefitProject}>
						<div className={styles.benefitContent}>
							<h3 className={styles.benefitTitle}>
								Successfully delivered projects
							</h3>
							<div className={styles.benefitNumber}>50+</div>
						</div>
					</div>

					<div className={styles.benefitClients}>
						<div className={styles.benefitContent}>
							<h3 className={styles.benefitTitle}>
								Clients who came to us by referrals
							</h3>
							<div className={styles.benefitNumber}>60%</div>
						</div>
					</div>
				</div>

				<div className={styles.textContainer}>
					<div className={styles.textSection}>
						Logiform streamlines{" "}
						<div className={styles.imagesContainer}>
							<span className={styles.line}>
								<Image src={LINE} />
							</span>
							<span className={styles.code}>
								<Image src={CODE} />
							</span>
							<span className={styles.dev}>
								<Image src={DEV} />
							</span>
						</div>
						the development process, delivering clean, secure, and scalable code
						that fuels your vision. We breathe life into your ideas with the
						expertise to tackle projects of any complexity.
						<span className={styles.starsImage}>
							<Image src={STARS} />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BenefitsSection;
