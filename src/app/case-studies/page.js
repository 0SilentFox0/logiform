"use client";
import styles from "@/components/CaseStudies/CaseStudies.module.css";
import Card from "@/components/CaseStudies/Card/Card";
import { VscSettings } from "react-icons/vsc";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import { useEffect, useState } from "react";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import PhoneImage from "@/assets/caseStudiesImg/Phone.png";
import GlitchEffect from "@/components/layout/HeroSection/GlitchEffect/GlitchEffect";
import { CasesGateway } from "@/api/cases/cases-gateway";

function CaseStudies() {
	const [cases, setCases] = useState([]);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [categories, setCategories] = useState([]);

	// Toggle filter visibility
	const toggleFilterVisibility = () => {
		setIsFilterVisible(!isFilterVisible);
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

	// Determine image height class for layout
	const getImageHeightClass = (index) =>
		index % 2 === 0 ? styles.largeImage : styles.smallImage;

	// Fetch cases and categories data
	useEffect(() => {
		const getCases = async () => {
			try {
				const data = await CasesGateway.getCasesPreview();
				setCases(data);

				// Extract unique categories from cases and update the state
				const uniqueCategories = new Set(
					data.flatMap((item) => item.categories)
				);
				setCategories([...uniqueCategories]);
			} catch (error) {
				console.error("Error fetching cases:", error);
			}
		};
		getCases();
	}, []);

	return (
		<div>
			<HeroSection
				title="Our Portfolio"
				glitchEffect={<GlitchEffect />}
				description="We definitely have what you need, check out the portfolio and contact us to get relevant cases"
				imageSrc={PhoneImage}
			/>
			<section className={styles.background}>
				<div className={styles.container}>
					<div className={styles.header}>
						<div className={styles.actions}>
							<button
								className={styles.action}
								onClick={toggleFilterVisibility}
							>
								<VscSettings className={styles.actionImg} />
							</button>

							{isFilterVisible && (
								<div className={styles.filterWindow}>
									{categories.map((category) => (
										<label key={category} className={styles.filterLabel}>
											<input
												type="checkbox"
												value={category}
												checked={selectedCategories.includes(category)}
												onChange={() => handleCategoryChange(category)}
											/>
											{category}
										</label>
									))}
								</div>
							)}
						</div>
					</div>

					<div className={styles.content}>
						<div className={styles.grid}>
							{filteredCases.map((case_, index) => (
								<Card
									key={case_.id}
									{...case_}
									imageHeight={getImageHeightClass(index)}
								/>
							))}
						</div>
					</div>

					<ContactSection />
				</div>
			</section>
		</div>
	);
}

export default CaseStudies;
