"use client";
import styles from "@/components/CaseStudies/CaseStudies.module.css";
import Card from "@/components/CaseStudies/Card/Card";
import { VscSettings } from "react-icons/vsc";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import { useEffect, useState } from "react";
import { directus } from "@/plugins/axios";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import PhoneImage from "@/assets/caseStudiesImg/Phone.png";
import GlitchEffect from "@/components/layout/HeroSection/GlitchEffect/GlitchEffect";

function CaseStudies() {
	const [cards, setCards] = useState([]);
	const [isFilterVisible, setIsFilterVisible] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState([]);

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

	// Filter cards based on selected categories
	const filteredCards =
		selectedCategories.length === 0
			? cards
			: cards.filter((card) => selectedCategories.includes(card.category));

	// Determine image height class for layout
	const getImageHeightClass = (index) =>
		index % 2 === 0 ? styles.largeImage : styles.smallImage;

	// Fetch cards data from API
	useEffect(() => {
		const fetchCards = async () => {
			try {
				const params = {
					fields: "image,category,title,description,slug",
				};
				const response = await directus.get("cases", { params });
				const data = response.data.data;

				const formattedCards = data.map((card) => ({
					id: card.id,
					image: card.card_image
						? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}${card.card_image}`
						: "",
					category: card.category_name || "Uncategorized",
					title: card.card_title,
					description: card.card_description,
				}));
				setCards(formattedCards);
			} catch (error) {
				console.error("Error fetching cards:", error);
			}
		};
		fetchCards();
	}, []);

	// Categories for filter options
	const categories = [
		"Blockchain",
		"Back-end",
		"Front-end",
		"Databases",
		"Cloud Services",
		"DevOps",
	];

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
							{filteredCards.map((card, index) => (
								<Card
									key={index} // Ensure a unique key for each card
									id={card.id}
									title={card.title}
									description={card.description}
									image={card.image}
									category={card.category}
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
