import { notFound } from 'next/navigation'; // To handle 404 case
import { CasesGateway } from '@/api/cases/cases-gateway';

import CaseStudiesDetailsContent from '../../../components/CaseStudies/CaseStudiesDetails/CaseStudiesDetailsContent';

export default async function CaseStudiesDetails({ params }) {
	const { slug } = params;
	const case_ = await CasesGateway.getCase(slug);

	if (!case_) {
		notFound(); // Use Next.js built-in 404 if the case study doesn't exist
	}

	return (
		<>
			<CaseStudiesDetailsContent case_={case_} />
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
