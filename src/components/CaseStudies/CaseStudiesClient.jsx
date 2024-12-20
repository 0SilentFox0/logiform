"use client";
import { useState } from "react";
import styles from "@/components/CaseStudies/CaseStudies.module.css";
import Card from "@/components/CaseStudies/Card/Card";
import { VscSettings } from "react-icons/vsc";
import ContactSection from "@/components/layout/ContactSection/ContactSection";

export default function CaseStudiesClient({ cases, categories }) {
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState([]);

	// Toggle filter visibility
	const toggleFilterVisibility = () => {
		setIsFilterVisible((prev) => !prev);
	};

	// Handle category filter changes
	const handleCategoryChange = (category) => {
		setSelectedCategories((prevCategories) =>
			prevCategories.includes(category)
				? prevCategories.filter((cat) => cat !== category)
				: [...prevCategories, category]
		);
	};

	// Filter cases based on selected categories
	const filteredCases =
		selectedCategories.length === 0
			? cases
			: cases.filter((case_) =>
					case_.categories.some((cat) => selectedCategories.includes(cat))
			  );

	const handleMouseLeave = () => {
		setIsFilterVisible(false);
	};

	return (
		<div>
			<section className={styles.background}>
				<div className={styles.container}>
					<div className={styles.contentWrapper}>
						<div className={styles.header}>
							<div className={styles.actions}>
								<button
									className={styles.action}
									onClick={toggleFilterVisibility}
								>
									<VscSettings className={styles.actionImg} />
								</button>

								{isFilterVisible && (
									<div
										className={styles.filterWindow}
										onMouseLeave={handleMouseLeave}
									>
										{categories && categories.length
											? categories.map((category) => (
													<label key={category} className={styles.filterLabel}>
														<input
															type="checkbox"
															value={category}
															checked={selectedCategories.includes(category)}
															onChange={() => handleCategoryChange(category)}
														/>
														{category}
													</label>
											  ))
											: ""}
									</div>
								)}
							</div>
						</div>

						<div className={styles.content}>
							<div className={styles.grid}>
								{filteredCases.map((case_) => (
									<Card key={case_.id} {...case_} />
								))}
							</div>
						</div>

						<ContactSection />
					</div>
				</div>
			</section>
		</div>
	);
}
