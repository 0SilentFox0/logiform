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
import { CasesGateway } from "@/api/cases/cases-gateway";

export default async function CaseStudiesDetails({ params }) {
	const { slug } = params;
	const case_ = await CasesGateway.getCase(slug);

	if (!case_) {
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
							{case_.categories.map((category) => (
								<button key={category} className={styles.tabButton}>
									{category}
								</button>
							))}
						</div>
					</div>

					<div className={styles.projectTitle}>
						<h1>{case_.title}</h1>
					</div>

					<div className={styles.projectDescription}>
						<p>{case_.description}</p>
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
					<div
						className={styles.detailsContent}
						dangerouslySetInnerHTML={{ __html: case_.content }}
					/>

					<ContactSection />
				</div>
			</section>
		</>
	);
}

// Use this to statically generate the pages
export async function generateStaticParams() {
	// Fetch all blog post slugs
	const slugs = await CasesGateway.getAllSlugs();

	// Return an array of params to pre-render
	return slugs;
}
