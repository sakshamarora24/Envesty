import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import CareerPage from './components/Pages/CareerPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
// import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
// import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';
import DigitalMarketing from './components/Pages/Services';
import AppDevelopment from './components/Pages/AppDevelopment';
import WebsiteDevelopment from './components/Pages/WebsiteDevelopment';
import BrandStrategizing from './components/Pages/BrandStrategizing';
import Cms from './components/Pages/Cms';
import Erp from './components/Pages/Erp';
import BlockchainDevelopment from './components/Pages/BlockchainDevelopment';
import CreativeDirection from './components/Pages/Creativedirection'
// import Facebookdetail from './components/Pages/Facebookdetail';
// import WhatsaapDetail from './components/Pages/whatsaapDetail';
// import InstagramDetail from './components/Pages/InstagramDetail';
import Blog1 from './components/Blog-detail/Blog1';
import Blog2 from './components/Blog-detail/Blog2';
import Blog3 from './components/Blog-detail/Blog3';
import WebDesignBlog from './components/Pages/WebDesignBlogs';
import SeoBlog from './components/Pages/SeoGuideBlog';
import AppDevelopmentBlog from './components/Pages/AppDevelopmentBlog';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          /> */}
          {/* <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} /> */}
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="service" element={<ServicesPage />} /> */}
          {/* <Route
            key={1}
            path="service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          /> */}
          <Route
          key={2}
            path="services"
            element={<DigitalMarketing />}
          />
          {/* <Route
          key={3}
            path="service/appdevelopment"
            element={<AppDevelopment />}
          />
          <Route
          key={4}
            path="service/websitedevelopment"
            element={<WebsiteDevelopment />}
          />
          <Route
          key={5}
            path="service/brandstrategizing"
            element={<BrandStrategizing />}
          />
          <Route
          key={6}
            path="service/cms"
            element={<Cms/>}
          />
          <Route
          key={7}
            path="service/erp"
            element={<Erp/>}
          />
           <Route
           key={8}
            path="service/blockchaindevelopment"
            element={<BlockchainDevelopment/>}
          />
          <Route
          key={9}
            path="service/creativedirection"
            element={<CreativeDirection/>}
          />
*/}
          {/* <Route path="portfolio" element={<PortfolioPage />} />  */}
          {/* <Route
            path="/instagramdetail"
            element={<InstagramDetail />}
          />
          <Route
            path="/whatsaapdetail"
            element={<WhatsaapDetail />}
          />
          <Route
            path="/facebookdetail"
            element={<Facebookdetail/>}
          /> */}
          {/* <Route path="blog" element={<BlogPage />} /> */}
          {/* <Route path="Websiteblog" element={<WebDesignBlog/>}/> */}
          {/* <Route path="AppBlog" element={<AppDevelopmentBlog/>}/> */}
          {/* <Route path="SeoBlog" element={<SeoBlog/>}/> */}

          {/* <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} /> */}
          {/* <Route path="blog/blog1" element={<Blog1 />} /> */}
          {/* <Route path="blog/blog2" element={<Blog2 />} /> */}
          {/* <Route path="blog/blog3" element={<Blog3 />} /> */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
          {/* <Route path="team" element={<TeamPage />} /> */}
          {/* <Route path="team/:teamDetails" element={<TeamDetails />} /> */}
          {/* <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          /> */}
          {/* <Route path="faq" element={<FaqPage />} /> */}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
