import BridgingSection from "./BridgingSection/BridgingSection"
import FAQSection from "./FAQSection/FAQSection"
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection"
import PodcastSection from "./PodcastSection/PodcastSection"
import TechStackSection from "./TechStackSection/TechStackSection"
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection"
import VisionSection from "./VisionSection/VisionSection"
import ContactSection from '../layout/ContactSection/ContactSection';

function Home() {
    return (
        <>
            <VisionSection />
            <TestimonialsSection />
            <BridgingSection />
            <TechStackSection />
            <HowItWorksSection />
            <PodcastSection />
            <FAQSection />
            <ContactSection />
        </>
    )
}

export default Home
