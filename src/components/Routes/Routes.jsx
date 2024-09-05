import { Route, Routes } from "react-router-dom"
import { ROUTES } from "../../utils/routes"

import HeroSection from "../HeroSection/HeroSection";
import Home from "../Home/Home"
import CaseStudies from "../CaseStudies/CaseStudies"

import GlitchEffect from '../HeroSection/GlitchEffect/GlitchEffect';

import PhoneImage from '../../assets/caseStudiesImg/Phone.png'
import CaseStudiesDetails from "../CaseStudies/CaseStudiesDetails/CaseStudiesDetails";

import desktopVideo from '../../assets/fullVersion.MOV'
import mobileVideo from '../../assets/mobile.MOV'

function AppRoutes() {
  return (
    <Routes>
      <Route index element={
        <>
          <HeroSection
            title={<>We provide agile secure <GlitchEffect /> solutions</>}
            description={"No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies."}
            videoSrc={desktopVideo}
            mobileVideoSrc={mobileVideo}
          />
          <Home />
        </>}
      />

      <Route path={ROUTES.SERVICES} element='' />
      <Route path={ROUTES.CASE_STUDIES} element={
        <>
          <HeroSection
            title={<>Our Portfolio <GlitchEffect /></>}
            description={"We definitely have what you need, check out the portfolio and contact us to get relevant cases"}
            imageSrc={PhoneImage}
          />
          <CaseStudies />
        </>}
      />
      <Route path={`${ROUTES.CASE_STUDIES}/:id`} element={<CaseStudiesDetails />} />

      <Route path={ROUTES.ABOUT_US} element='' />
      <Route path={ROUTES.BLOG} element='' />
      <Route path={ROUTES.RESOURCES} element='' />
      <Route path={ROUTES.PARTNER_WITH_US} element='' />
    </Routes>
  )
}

export default AppRoutes
