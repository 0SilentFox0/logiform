import AboutUsHeroSection from './AboutUsHeroSection/AboutUsHeroSection'
import ContactSection from '../layout/ContactSection/ContactSection'
import BenefitsSection from './BenefitsSection/BenefitsSection'
import CoreTeamSection from './CoreTeamSection/CoreTeamSection'
import WhyLogiformSection from './WhyLogiformSection/WhyLogiformSection'
import ApproachSection from './ApproachSection/ApproachSection'
import CoreServicesSection from './CoreServicesSection/CoreServicesSection'
import MethodologySection from './MethodologySection/MethodologySection'

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
    )
}

export default AboutUs
