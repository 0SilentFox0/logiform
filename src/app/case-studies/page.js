import { CasesGateway } from "@/api/cases/cases-gateway";
import CaseStudiesClient from "@/components/CaseStudies/CaseStudiesClient";
import GlitchEffect from "@/components/layout/HeroSection/GlitchEffect/GlitchEffect";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import PhoneImage from "@/assets/caseStudiesImg/Phone.png";

import { SITE_URL } from "@/utils/constants";
import Script from "next/script";

export const metadata = {
	title: "Logiform | Case Studies",
	description:
		"Explore our collection of case studies showcasing Logiform's solutions and success stories.",
	openGraph: {
		title: "Logiform | Case Studies",
		description:
			"Explore our collection of case studies showcasing Logiform's solutions and success stories.",
		url: `${SITE_URL}/case-studies`,
		type: "website",
		images: [
			{
				url: `${SITE_URL}/og-image.jpg`,
				width: 1200,
				height: 630,
				alt: "Logiform Case Studies",
			},
		],
	},
};

export default async function CaseStudiesPage() {
	const cases = await CasesGateway.getCasesPreview();

	// Extract unique categories from cases
	const categories = Array.from(
		new Set(cases.flatMap((item) => item.categories))
	);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Logiform Case Studies",
		description:
			"Explore our collection of case studies showcasing Logiform's solutions and success stories.",
		url: `${SITE_URL}/case-studies`,
		mainEntity: {
			"@type": "ItemList",
			itemListElement: cases.map((caseStudy, index) => ({
				"@type": "ListItem",
				position: index + 1,
				url: `${SITE_URL}/case-studies/${caseStudy.slug}`,
			})),
		},
	};

	return (
		<>
			<Script
				id="json-ld-case-studies-index"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<HeroSection
				title="Our Portfolio"
				glitchEffect={<GlitchEffect />}
				zription="We definitely have what you need, check out the portfolio and contact us to get relevant cases"
				imageSrc={PhoneImage}
			/>
			<CaseStudiesClient cases={cases} categories={categories} />
		</>
	);
}
