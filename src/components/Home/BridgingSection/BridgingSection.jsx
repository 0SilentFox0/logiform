import Image from "next/image";
import styles from "./BridgingSection.module.css";

import TechnicalExpertise from "@/assets/bridgingImages/TechnicalExpertise.png";
import TransparencyAndTrust from "@/assets/bridgingImages/TransparencyAndTrust.png";
import DeadlinesAndCosts from "@/assets/bridgingImages/DeadlinesAndCosts.png";

import BAG from "@/assets/bridgingImages/bag.svg";
import FLAG from "@/assets/bridgingImages/flag.svg";
import HANDS from "@/assets/bridgingImages/hands.svg";

const challenges = [
	{
		icon: BAG,
		title: "Lack of Deep Technical Expertise",
		text: "Our team consists of seasoned experts in both Web2 and Web3 development. We break down complex problems into manageable tasks, ensuring you understand each step of the process. From blockchain integration to UI/UX design, we provide the technical depth to bring your vision to life.",
		image: TechnicalExpertise,
	},
	{
		icon: HANDS,
		title: "Transparency & Trust",
		text: "We believe in complete transparency. Our clients have access to real-time project updates, clear timelines, and open communication channels. You'll always know where your project stands, fostering a partnership built on trust and mutual understanding.",
		image: TransparencyAndTrust,
	},
	{
		icon: FLAG,
		title: "Missed Deadlines & Cost Overruns",
		text: "We pride ourselves on meticulous planning and execution. By setting realistic deadlines and budgets, we deliver projects on time and within scope. We use Scrum-based approaches to adapt to changes without compromising on quality or delivery time.",
		image: DeadlinesAndCosts,
	},
];

function BridgingSection() {
	return (
		<section className={styles.container} aria-labelledby="bridging-title">
			<div className={styles.titleContainer}>
				<h2 id="bridging-title" className={styles.title}>
					Bridging the Gap Between Vision and Reality
				</h2>
				<p className={styles.subtitle}>
					We tackle the most common challenges to ensure your project`s success
				</p>
			</div>

			<div className={styles.challenges}>
				{challenges.map((challenge, index) => (
					<div key={index} className={styles.challengeItem}>
						<div className={styles.content}>
							<div className={styles.iconContainer}>
								<Image src={challenge.icon} alt="" width={40} height={40} />
							</div>
							<div className={styles.text}>
								<h3 className={styles.challengeTitle}>{challenge.title}</h3>
								<p className={styles.challengeText}>{challenge.text}</p>
							</div>
						</div>
						<div className={styles.imgContainer}>
							<Image
								className={styles.image}
								src={challenge.image}
								alt={`Illustration for ${challenge.title}`}
								width={400}
								height={300}
								loading="lazy"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default BridgingSection;
