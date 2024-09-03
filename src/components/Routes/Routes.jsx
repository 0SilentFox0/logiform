import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import { ROUTES } from "../../utils/routes"
import CaseStudies from "../CaseStudies/CaseStudies"

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.SERVICES} element='' />
      <Route path={ROUTES.CASE_STUDIES} element={<CaseStudies />} />
      <Route path={ROUTES.ABOUT_US} element='' />
      <Route path={ROUTES.BLOG} element='' />
      <Route path={ROUTES.RESOURCES} element='' />
      <Route path={ROUTES.PARTNER_WITH_US} element='' />
    </Routes>
  )
}

export default AppRoutes
