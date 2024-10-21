import { notFound } from "next/navigation"; // To handle 404 case
import { CasesGateway } from "@/api/cases/cases-gateway";

import CaseStudiesDetailsContent from "@/components/CaseStudies/CaseStudiesDetails/CaseStudiesDetailsContent";

import Script from "next/script";
import { SITE_URL } from "@/utils/constants";

export default async function CaseStudiesDetails({ params }) {
	const { slug } = params;
	const case_ = await CasesGateway.getCase(slug);

	if (!case_) {
		notFound(); // Use Next.js built-in 404 if the case study doesn't exist
	}
	const jsonLd = generateJsonLd(case_);

	return (
		<>
			<Script
				id="json-ld-case-study"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<CaseStudiesDetailsContent case_={case_} />
		</>
	);
}
export async function generateMetadata({ params }) {
	const { slug } = params;
	const case_ = await CasesGateway.getCase(slug);

	if (!case_) {
		return {
			title: "Case Study Not Found",
		};
	}

	const title = `${case_.title} | Logiform | Case Study`;
	const description =
		case_.description || "Read our latest case study on Logiform";
	const ogImage = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${case_.image.id}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url: `${SITE_URL}/case-studies/${slug}`,
			type: "article",
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: case_.title,
				},
			],
		},
	};
}

export async function generateStaticParams() {
	const slugs = await CasesGateway.getAllSlugs();
	return slugs;
}

function generateJsonLd(case_) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: case_.title,
		image: `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${case_.image.id}`,
		datePublished: case_.date_created,
		dateModified: case_.date_updated,
		author: {
			"@type": "Organization",
			name: "Logiform",
		},
		publisher: {
			"@type": "Organization",
			name: "Logiform",
			logo: {
				"@type": "ImageObject",
				url: `${SITE_URL}/favicon.ico`,
			},
		},
		description: case_.description,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `${SITE_URL}/case-studies/${case_.slug}`,
		},
	};
}
