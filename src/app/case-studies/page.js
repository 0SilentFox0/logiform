import { CasesGateway } from "@/api/cases/cases-gateway";
import CaseStudiesClient from "@/components/CaseStudies/CaseStudiesClient";
import GlitchEffect from "@/components/layout/HeroSection/GlitchEffect/GlitchEffect";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import PhoneImage from "@/assets/caseStudiesImg/Phone.png";

export default async function CaseStudiesPage() {
	const cases = await CasesGateway.getCasesPreview();

	// Extract unique categories from cases
	const categories = Array.from(
		new Set(cases.flatMap((item) => item.categories))
	);

	return (
		<div>
			<HeroSection
				title="Our Portfolio "
				glitchEffect={<GlitchEffect />}
				description="We definitely have what you need, check out the portfolio and contact us to get relevant cases"
				imageSrc={PhoneImage}
			/>
			<CaseStudiesClient cases={cases} categories={categories} />
		</div>
	);
}
