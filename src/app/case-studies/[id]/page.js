import { notFound } from "next/navigation"; // To handle 404 case
import Image from "next/image";
import styles from "@/components/CaseStudies/CaseStudiesDetails/CaseStudiesDetails.module.css";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import PrevButtonImage from "@/assets/caseStudiesDetailsImg/arrow.svg";
import Binance from "@/assets/caseStudiesDetailsImg/binance.svg";
import Ethereum from "@/assets/caseStudiesDetailsImg/Ethereum.svg";
import Python from "@/assets/caseStudiesDetailsImg/python.svg";
import Nest from "@/assets/caseStudiesDetailsImg/Nest js.svg";
import Phone from "@/assets/caseStudiesDetailsImg/phoneImg.png";
import Link from "next/link";

const caseStudies = {
	1: {
		title: "TeXifyMath",
		description: "Computer vision virtual basketball assistant...",
		details: "Detailed information about TeXifyMath...",
	},
	2: {
		title: "Blockify",
		description: "This is the description for Blockify.",
		details: "Detailed information about Blockify...",
	},
	// Add other case studies...
};

export default function CaseStudiesDetails({ params }) {
	const caseStudy = caseStudies[params.id];

	if (!caseStudy) {
		notFound(); // Use Next.js built-in 404 if the case study doesn't exist
	}

	return (
		<>
			<div className={styles.hero}>
				<div className={styles.content}>
					<div className={styles.navigationButtons}>
						<Link href="/case-studies" className={styles.prevPageButton}>
							<Image src={PrevButtonImage} alt="Go back" />
						</Link>
						<div className={styles.tabsWrapper}>
							<button className={styles.tabButton}>Blockchain</button>
							<button className={styles.tabButton}>Blockchain</button>
						</div>
					</div>

					<div className={styles.projectTitle}>
						<h1>{caseStudy.title}</h1>
					</div>

					<div className={styles.projectDescription}>
						<p>{caseStudy.description}</p>
						<div className={styles.actionButtons}>
							<button className={styles.actionButton}>
								<Image src={Binance} alt="Binance" />
							</button>
							<button className={styles.actionButton}>
								<Image src={Ethereum} alt="Ethereum" />
							</button>
							<button className={styles.actionButton}>
								<Image src={Python} alt="Python" />
							</button>
							<button className={styles.actionButton}>
								<Image src={Nest} alt="Nest" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<section className={styles.detailsSection}>
				<div className={styles.detailsContainer}>
					<div className={styles.mainText}>
						<p>
							Hiroo, an innovative recruiting app, aimed to revolutionize job
							discovery and HR communication...
						</p>
					</div>

					<div className={styles.aboutProject}>
						<Image
							className={styles.aboutProjectImage}
							src={Phone}
							alt="Phone"
						/>
						{/* Add content */}
					</div>

					<ContactSection />
				</div>
			</section>
		</>
	);
}

// Use this to statically generate the pages
export async function generateStaticParams() {
	const caseStudyIds = Object.keys(caseStudies);

	return caseStudyIds.map((id) => ({
		id,
	}));
}
