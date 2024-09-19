import { Route, Routes } from "react-router-dom";
import { ROUTES } from "@/utils/routes";

import Home from "../Home/Home";
import CaseStudies from "@/caseStudies/CaseStudies";
import CaseStudiesDetails from "@/caseStudies/CaseStudiesDetails/CaseStudiesDetails";

import HeroSection from "../layout/HeroSection/HeroSection";
import desktopVideo from "@/assets/fullVersion.MOV";
import mobileVideo from "@/assets/mobile.MOV";
import GlitchEffect from "../layout//HeroSection/GlitchEffect/GlitchEffect";

import PhoneImage from "@/assets/caseStudiesImg/Phone.png";
import Blog from "../Blog/Blog";
import BlogPost from "../Blog/BlogPost/BlogPost";
import AboutUs from "../AboutUs/AboutUs";

function AppRoutes() {
	return (
		<Routes>
			<Route
				index
				element={
					<>
						<HeroSection
							title={
								<>
									We provide agile secure <GlitchEffect /> solutions
								</>
							}
							description={
								"No bureaucracy, no excuses – raw talent and relentless execution for startups and mid-sized companies."
							}
							videoSrc={desktopVideo}
							mobileVideoSrc={mobileVideo}
						/>
						<Home />
					</>
				}
			/>

			<Route path={ROUTES.SERVICES} element="" />
			<Route
				path={ROUTES.CASE_STUDIES}
				element={
					<>
						<HeroSection
							title={
								<>
									Our Portfolio <GlitchEffect />
								</>
							}
							description={
								"We definitely have what you need, check out the portfolio and contact us to get relevant cases"
							}
							imageSrc={PhoneImage}
						/>
						<CaseStudies />
					</>
				}
			/>
			<Route
				path={`${ROUTES.CASE_STUDIES}/:id`}
				element={<CaseStudiesDetails />}
			/>

			<Route path={ROUTES.ABOUT_US} element={<AboutUs />} />

			<Route path={ROUTES.BLOG} element={<Blog />} />
			<Route path={`${ROUTES.BLOG}/:id`} element={<BlogPost />} />

			<Route path={ROUTES.RESOURCES} element="" />
		</Routes>
	);
}

export default AppRoutes;
