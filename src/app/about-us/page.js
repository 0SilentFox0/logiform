import AboutUsHeroSection from "@/components/AboutUs/AboutUsHeroSection/AboutUsHeroSection";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import BenefitsSection from "@/components/AboutUs/BenefitsSection/BenefitsSection";
import CoreTeamSection from "@/components/AboutUs/CoreTeamSection/CoreTeamSection";
import WhyLogiformSection from "@/components/AboutUs/WhyLogiformSection/WhyLogiformSection";
import ApproachSection from "@/components/AboutUs/ApproachSection/ApproachSection";
import CoreServicesSection from "@/components/AboutUs/CoreServicesSection/CoreServicesSection";
import MethodologySection from "@/components/AboutUs/MethodologySection/MethodologySection";

function AboutUs() {
	return (
		<>
			<AboutUsHeroSection />
			<BenefitsSection />
			<CoreTeamSection />
			<WhyLogiformSection />
			<ApproachSection />
			<CoreServicesSection />
			<MethodologySection />
			<ContactSection />
		</>
	);
}

export default AboutUs;
