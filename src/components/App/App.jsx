import BridgingSection from '../BridgingSection/BridgingSection'
import ContactSection from '../ContactSection/ContactSection'
import FAQSection from '../FAQSection/FAQSection'
import Footer from '../Footer/Footer'
import HomeSection from '../HomeSection/HomeSection'
import HowItWorksSection from '../HowItWorksSection/HowItWorksSection'
import PodcastSection from '../PodcastSection/PodcastSection'
import TechStack from '../TechStack/TechStack'
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection'
import VisionSection from '../VisionSection/VisionSection'

function App() {

  return (
    <div className='app'>
        <HomeSection />
        <VisionSection />
        <TestimonialsSection />
        <BridgingSection />
        <TechStack />
        <HowItWorksSection />
        <PodcastSection />
        <FAQSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default App
