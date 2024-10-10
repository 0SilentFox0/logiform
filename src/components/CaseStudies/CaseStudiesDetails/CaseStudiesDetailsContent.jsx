import CaseStudiesDetailsHeader from "./CaseStudiesDetailsHeader";
import ContactSection from "@/components/layout/ContactSection/ContactSection";

import styles from "@/components/CaseStudies/CaseStudiesDetails/CaseStudiesDetails.module.css";

const CaseStudiesDetailsContent = ({ case_ }) => {
	const { content } = case_;

	return (
		<div className={styles.detailsTextContainer}>
			<CaseStudiesDetailsHeader case_={case_} />
			<section className={styles.detailsSection}>
				<div className={styles.container}>
					<div className={styles.detailsContainer}>
						<div className={styles.content}>
							<div
								className={styles.detailsContent}
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						</div>
						<ContactSection />
					</div>
				</div>
			</section>
		</div>
	);
};

export default CaseStudiesDetailsContent;
