import { notFound } from 'next/navigation'; // To handle 404 case
import Image from 'next/image';
import styles from '@/components/CaseStudies/CaseStudiesDetails/CaseStudiesDetails.module.css';
import ContactSection from '@/components/layout/ContactSection/ContactSection';
import PrevButtonImage from '@/assets/caseStudiesDetailsImg/arrow.svg';

import BINANCE from '@/assets/caseStudiesDetailsImg/binance.svg';
import ETHEREUM from '@/assets/caseStudiesDetailsImg/Ethereum.svg';
import PYTHON from '@/assets/caseStudiesDetailsImg/python.svg';
import NEST from '@/assets/caseStudiesDetailsImg/Nest js.svg';

import Link from 'next/link';
import { CasesGateway } from '@/api/cases/cases-gateway';

export default async function CaseStudiesDetails({ params }) {
	const { slug } = params;
	const case_ = await CasesGateway.getCase(slug);

	if (!case_) {
		notFound(); // Use Next.js built-in 404 if the case study doesn't exist
	}

	const techImages = {
		Binance: BINANCE,
		Ethereum: ETHEREUM,
		Python: PYTHON,
		Nest: NEST,
	};

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
							{case_.technologies.map((tech) => (
								<button key={tech} className={styles.actionButton}>
										<Image src={techImages[tech]} alt={tech} />
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<section className={styles.detailsSection}>
				<div className={styles.detailsContainer}>
					<div className={styles.detailsContent} dangerouslySetInnerHTML={{ __html: case_.content }} />

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
