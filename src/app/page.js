import FAQSection from "@/components/Home/FAQSection/FAQSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection/HowItWorksSection";
import PodcastSection from "@/components/Home/PodcastSection/PodcastSection";
import TechStackSection from "@/components/Home/TechStackSection/TechStackSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection/TestimonialsSection";
import ContactSection from "@/components/layout/ContactSection/ContactSection";
import BridgingSection from "@/components/Home/BridgingSection/BridgingSection";
import VisionSection from "@/components/Home/VisionSection/VisionSection";
import HeroSection from "@/components/layout/HeroSection/HeroSection";
import GlitchEffect from "@/components/layout/HeroSection/GlitchEffect/GlitchEffect";

function Home() {
	return (
		<>
			<HeroSection
				title="We provide agile secure solutions "
				glitchEffect={<GlitchEffect />}
				description="No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies."
				showVideo
			/>
			<VisionSection />
			<TestimonialsSection />
			<BridgingSection />
			<TechStackSection />
			<HowItWorksSection />
			<PodcastSection />
			<FAQSection />
			<ContactSection />
		</>
	);
}

export default Home;
