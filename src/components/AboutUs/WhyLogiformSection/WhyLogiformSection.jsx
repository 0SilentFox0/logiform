import styles from "./WhyLogiformSection.module.css";
import Image from "next/image";

import GRAPH from "@/assets/aboutUsImages/GRAPH.svg";
import TARGET from "@/assets/aboutUsImages/target.svg";
import TRANSPARENCY from "@/assets/aboutUsImages/Transparency.svg";

const cardData = [
	{
		icon: GRAPH,
		title: "Trend aware",
		text: "Crypto experts since 2017, we understand market needs. By 2026, 65% of large enterprises will use blockchain.",
	},
	{
		icon: TARGET,
		title: "Security",
		text: "Logiform prioritizes security-first development. With $3.8B lost to DeFi hacks in 2022, the need for secure blockchain solutions is crucial.",
	},
	{
		icon: TRANSPARENCY,
		title: "Transparency",
		text: "Real-time updates, open communication, and clear timelines foster transparency and trust at every project stage.",
	},
];

function WhyLogiformSection() {
	return (
		<section className={styles.whyLogiformSection}>
			<div className={styles.whyLogiformTitle}>
				<h1>Why Logiform</h1>
				<p>Your development needs</p>
			</div>

			<div className={styles.whyLogiformCards}>
				{cardData.map(({ icon, title, text }, index) => (
					<div key={index} className={styles.whyLogiformCard}>
						<div className={styles.cardIconContainer}>
							<Image src={icon} alt={title} className={styles.cardIcon} />
						</div>
						<div className={styles.cardContent}>
							<h3 className={styles.cardTitle}>{title}</h3>
							<p className={styles.cardText}>{text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default WhyLogiformSection;