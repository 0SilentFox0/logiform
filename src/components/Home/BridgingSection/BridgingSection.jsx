import styles from "./BridgingSection.module.css";

import TechnicalExpertise from "@/assets/bridgingImages/TechnicalExpertise.png";
import TransparencyAndTrust from "@/assets/bridgingImages/TransparencyAndTrust.png";
import DeadlinesAndCosts from "@/assets/bridgingImages/DeadlinesAndCosts.png";

import BAG from "@/assets/bridgingImages/bag.svg";
import FLAG from "@/assets/bridgingImages/flag.svg";
import HANDS from "@/assets/bridgingImages/hands.svg";
import Image from "next/image";

function BridgingSection() {
	return (
		<section className={styles.container}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>
					Bridging the Gap Between Vision and Reality
				</h2>
				<p className={styles.subtitle}>
					We tackle the most common challenges to ensure your project’s success
				</p>
			</div>

			<div className={styles.challenges}>
				<div className={styles.challengeItem}>
					<div className={styles.content}>
						<div className={styles.iconContainer}>
							<Image src={BAG} alt="bag" />
						</div>
						<div className={styles.text}>
							<h3 className={styles.challengeTitle}>
								Lack of Deep Technical Expertise
							</h3>
							<p className={styles.challengeText}>
								Our team consists of seasoned experts in both Web2 and Web3
								development. We break down complex problems into manageable
								tasks, ensuring you understand each step of the process. From
								blockchain integration to UI/UX design, we provide the technical
								depth to bring your vision to life.
							</p>
						</div>
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.image}
							src={TechnicalExpertise}
							alt="Technical Expertise"
						/>
					</div>
				</div>
				<div className={styles.challengeItem}>
					<div className={styles.imgContainer}>
						<Image
							className={styles.image}
							src={TransparencyAndTrust}
							alt="Transparency and Trust"
						/>
					</div>
					<div className={styles.content}>
						<div className={styles.iconContainer}>
							<Image src={HANDS} alt="hands" />
						</div>
						<div className={styles.text}>
							<h3 className={styles.challengeTitle}>Transparency & Trust</h3>
							<p className={styles.challengeText}>
								We believe in complete transparency. Our clients have access to
								real-time project updates, clear timelines, and open
								communication channels. You’ll always know where your project
								stands, fostering a partnership built on trust and mutual
								understanding.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.challengeItem}>
					<div className={styles.content}>
						<div className={styles.iconContainer}>
							<Image src={FLAG} alt="flag" />
						</div>
						<div className={styles.text}>
							<h3 className={styles.challengeTitle}>
								Missed Deadlines & Cost Overruns
							</h3>
							<p className={styles.challengeText}>
								We pride ourselves on meticulous planning and execution. By
								setting realistic deadlines and budgets, we deliver projects on
								time and within scope. We use Scrum-based approaches to adapt to
								changes without compromising on quality or delivery time.
							</p>
						</div>
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.image}
							src={DeadlinesAndCosts}
							alt="Deadlines and Costs"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BridgingSection;
