import styles from "./WhyLogiformSection.module.css";

import GRAPH from "@/assets/aboutUsImages/GRAPH.svg";
import TARGET from "@/assets/aboutUsImages/target.svg";
import Image from "next/image";
import TRANSPARENCY from "@/assets/aboutUsImages/Transparency.svg";

function WhyLogiformSection() {
	return (
		<section className={styles.whyLogiformSection}>
			<div className={styles.whyLogiformTitle}>
				<h1>Why Logiform</h1>
				<p>Your development needs</p>
			</div>

			<div className={styles.whyLogiformCards}>
				<div className={styles.whyLogiformCard}>
					<div className={styles.cardIconContainer}>
						<Image src={GRAPH} className={styles.cardIcon} />
					</div>

					<div className={styles.cardContent}>
						<h3 className={styles.cardTitle}>Trend aware</h3>
						<p className={styles.cardText}>
							Crypto experts since 2017, we understand market needs. By 2026,
							65% of large enterprises will use blockchain.
						</p>
					</div>
				</div>

				<div className={styles.whyLogiformCard}>
					<div className={styles.cardIconContainer}>
						<Image src={TARGET} className={styles.cardIcon} />
					</div>

					<div className={styles.cardContent}>
						<h3 className={styles.cardTitle}>Security</h3>
						<p className={styles.cardText}>
							Logiform prioritizes security-first development. With $3.8B lost
							to DeFi hacks in 2022, the need for secure blockchain solutions is
							crucial.
						</p>
					</div>
				</div>

				<div className={styles.whyLogiformCard}>
					<div className={styles.cardIconContainer}>
						<Image src={TRANSPARENCY} className={styles.cardIcon} />
					</div>

					<div className={styles.cardContent}>
						<h3 className={styles.cardTitle}>Transparency</h3>
						<p className={styles.cardText}>
							Real-time updates, open communication, and clear timelines foster
							transparency and trust at every project stage
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyLogiformSection;
