import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import HousePlanPage from './components/Houseplan.js';
import ServicesPage from './components/ServicesPage.js';
import ProjectsPage from './components/ProjectsPage.js';
import ElevationPage from './components/ElevationPage.js';
import DesignPage from './components/DesignPage.js';
import Pricing from './components/Pricing.js';
import Blog from './components/Blog.js';
import OurStory from './components/OurStory.js';
import Careers from './components/Careers.js';
import ReadyHouseDesigns from './components/ReadyHouseDesigns.js';
import FloorPlan from './components/FloorPlan.js';
import HouseConstruction from './components/HouseConstruction.js';
import HomeInteriorDesign from './components/HomeInteriorDesign.js';
import OfficeInteriorDesign from './components/OfficeInteriorDesign.js';
import DesignIdeas from './components/DesignIdeas.js';
import TwoDPlansElevations from './components/TwoDPlansElevations.js';
import ThreeDArchitecturalModeling from './components/ThreeDArchitecturalModeling.js';
import ThreeDRenderingVisualization from './components/ThreeDRenderingVisualization.js';
import BuildingInformationModeling from './components/BuildingInformationModeling.js';
import VirtualToursWalkthroughs from './components/VirtualToursWalkthroughs.js';
import ThreeDInteriorDesign from './components/ThreeDInteriorDesign.js';
import ResidentialConstruction from './components/ResidentialConstruction.js';
import CommercialConstruction from './components/CommercialConstruction.js';
import Renovations from './components/Renovations.js';
import FootingConstruction from './components/FootingConstruction.js';
import DailyChecklistsInspections from './components/DailyChecklistsInspections.js';
import ProgressReportsDocumentation from './components/ProgressReportsDocumentation.js';
import CommunicationCollaboration from './components/CommunicationCollaboration.js';
import SafetyProtocolsCompliance from './components/SafetyProtocolsCompliance.js';
import MaterialManagementInventory from './components/MaterialManagementInventory.js';
import QualityAssuranceControl from './components/QualityAssuranceControl.js';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import Seo from './components/Seo';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route
            path="/"
            element={
              <>
                <Seo
                  title="Housekaar Construction Company - Architectural & Interior Design in Patna"
                  description="Housekaar Construction Company provides expert architectural design, interior design, and construction services in Patna, Bihar. We specialize in creating beautiful and functional homes. Contact us for your dream home."
                  keywords="house construction, interior design, architectural design, construction company, Patna, Bihar, Housekaar, home builders, residential construction, commercial construction"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_YOUR_HOME_PAGE_IMAGE" // Replace with a relevant image URL
                  article={false} // It's not an article, but a website page
                  publishedTime={null} // Not applicable for home page
                  modifiedTime={null} // Not applicable for home page
                />
                <HomePage />
              </>
            }
          />
          <Route
            path="/house-plans"
            element={
              <>
                <Seo
                  title="House Plans and Architectural Designs in Patna | Housekaar"
                  description="Explore a wide range of house plans and architectural designs in Patna, Bihar. Find the perfect plan for your dream home with Housekaar's expert services."
                  keywords="house plans, architectural designs, home plans, building plans, Patna, Bihar, Housekaar, residential plans, custom house plans"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_HOUSE_PLANS_IMAGE" // Replace with a relevant image URL
                  article={false}
                />
                <HousePlanPage />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Seo
                  title="Construction & Design Services in Patna | Housekaar"
                  description="Discover our comprehensive construction and design services in Patna, Bihar. From architectural design to interior solutions, Housekaar delivers quality and excellence."
                  keywords="construction services, architectural services, interior design, home construction, building services, Patna, Bihar, Housekaar, residential services, commercial services"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_SERVICES_IMAGE" // Replace with a relevant image URL
                  article={false}
                />
                <ServicesPage />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Seo
                  title="Completed Construction Projects in Patna | Housekaar"
                  description="View our portfolio of completed construction projects in Patna, Bihar. See how Housekaar turns visions into reality with exceptional craftsmanship and design."
                  keywords="construction projects, completed projects, building projects, home construction, Patna, Bihar, Housekaar, residential projects, commercial projects, project portfolio"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_PROJECTS_IMAGE" // Replace with a relevant image URL
                  article={false}
                />
                <ProjectsPage />
              </>
            }
          />
          <Route
            path="/elevation"
            element={
              <>
                <Seo
                  title="House Elevation Designs in Patna | Housekaar"
                  description="Explore stunning house elevation designs in Patna, Bihar. Housekaar offers innovative and modern elevation solutions to enhance your home's exterior appeal."
                  keywords="house elevation, elevation designs, home exterior, building facade, Patna, Bihar, Housekaar, residential elevation, modern elevation, architectural elevation"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_ELEVATION_IMAGE" // Replace with a relevant image URL
                  article={false}
                />
                <ElevationPage />
              </>
            }
          />
          <Route
            path="/designpage"
            element={
              <>
                <Seo
                  title="Architectural Design Services in Patna | Housekaar"
                  description="Explore our expert architectural design services in Patna. From residential to commercial, Housekaar delivers innovative and functional designs tailored to your needs."
                  keywords="architectural design, building design, home design, commercial design, Patna, Bihar, Housekaar, design services, architectural plans"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_DESIGN_PAGE_IMAGE"
                  article={false}
                />
                <DesignPage />
              </>
            }
          />
          <Route
            path="/pricing"
            element={
              <>
                <Seo
                  title="Pricing for Construction & Design Services in Patna | Housekaar"
                  description="View our transparent pricing for architectural design, interior design, and construction services in Patna. Get a free quote for your project with Housekaar."
                  keywords="construction pricing, design pricing, architectural cost, interior design cost, Patna, Bihar, Housekaar, building costs, home construction pricing"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_PRICING_IMAGE"
                  article={false}
                />
                <Pricing />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Seo
                  title="Construction & Design Blog | Housekaar Patna"
                  description="Read our blog for the latest insights, tips, and trends in construction and design in Patna. Stay informed with Housekaar's expert advice."
                  keywords="construction blog, design blog, home building tips, architectural insights, Patna, Bihar, Housekaar, building trends, interior design tips"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_BLOG_IMAGE"
                  article={false}
                />
                <Blog />
              </>
            }
          />
          <Route
            path="/our-story"
            element={
              <>
                <Seo
                  title="Our Story | Housekaar Construction Company in Patna"
                  description="Learn about the journey and values of Housekaar Construction Company in Patna. Discover our commitment to quality and customer satisfaction."
                  keywords="our story, company history, about us, building company, Patna, Bihar, Housekaar, construction company values, company mission"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_OUR_STORY_IMAGE"
                  article={false}
                />
                <OurStory />
              </>
            }
          />
          <Route
            path="/careers"
            element={
              <>
                <Seo
                  title="Careers at Housekaar Construction in Patna | Join Our Team"
                  description="Explore career opportunities at Housekaar Construction in Patna. Join our team of professionals and build your career in the construction and design industry."
                  keywords="careers, jobs, construction jobs, design jobs, hiring, Patna, Bihar, Housekaar, building careers, architectural jobs"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_CAREERS_IMAGE"
                  article={false}
                />
                <Careers />
              </>
            }
          />
          <Route
            path="/ready-designs"
            element={
              <>
                <Seo
                  title="Ready House Designs in Patna | Housekaar"
                  description="Browse our collection of ready house designs in Patna. Find pre-designed plans that fit your style and budget with Housekaar's expert solutions."
                  keywords="ready house designs, pre-designed plans, house plans, building designs, Patna, Bihar, Housekaar, residential designs, home plans"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_READY_DESIGNS_IMAGE"
                  article={false}
                />
                <ReadyHouseDesigns />
              </>
            }
          />
          <Route
            path="/floor-plans"
            element={
              <>
                <Seo
                  title="Floor Plans | Housekaar Construction in Patna"
                  description="View various floor plans offered by Housekaar construction in Patna. Find the perfect floor plan that will meet your needs."
                  keywords="floor plans, building plans, house plans, Patna, Bihar, Housekaar, home plans, architectural plans"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_FLOOR_PLANS_IMAGE"
                  article={false}
                />
                <FloorPlan />
              </>
            }
          />
          <Route
            path="/house-construction"
            element={
              <>
                <Seo
                  title="House Construction Services in Patna | Housekaar"
                  description="Get professional house construction services in Patna with Housekaar. We build your dream homes with quality materials and expert craftsmanship."
                  keywords="house construction, home building, residential construction, building services, Patna, Bihar, Housekaar, home construction services, new home construction"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_HOUSE_CONSTRUCTION_IMAGE"
                  article={false}
                />
                <HouseConstruction />
              </>
            }
          />
          <Route
            path="/home-interior"
            element={
              <>
                <Seo
                  title="Home Interior Design Services in Patna | Housekaar"
                  description="Transform your home with our home interior design services in Patna. Housekaar creates stylish and functional spaces that reflect your personal taste."
                  keywords="home interior design, residential interior, interior decoration, home styling, Patna, Bihar, Housekaar, interior design services, home decor"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_HOME_INTERIOR_IMAGE"
                  article={false}
                />
                <HomeInteriorDesign />
              </>
            }
          />
          <Route
            path="/office-interior"
            element={
              <>
                <Seo
                  title="Office Interior Design in Patna | Housekaar"
                  description="Enhance your workspace with our office interior design services in Patna. Housekaar creates productive and inspiring office environments."
                  keywords="office interior design, commercial interior, office styling, workplace design, Patna, Bihar, Housekaar, office decor, interior solutions"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_OFFICE_INTERIOR_IMAGE"
                  article={false}
                />
                <OfficeInteriorDesign />
              </>
            }
          />
          <Route
            path="/design-ideas"
            element={
              <>
                <Seo
                  title="Design Ideas | Housekaar Construction in Patna"
                  description="Find design ideas for your home or office in Patna. Housekaar provides inspiration and expert advice to help you create your dream space."
                  keywords="design ideas, interior design tips, home decor ideas, office design inspiration, Patna, Bihar, Housekaar, building design ideas, architectural inspiration"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_DESIGN_IDEAS_IMAGE"
                  article={false}
                />
                <DesignIdeas />
              </>
            }
          />
          <Route
            path="/two-d-plans-elevations"
            element={
              <>
                <Seo
                  title="2D Plans & Elevations Services in Patna | Housekaar"
                  description="Get detailed 2D plans and elevations for your construction projects in Patna. Housekaar provides accurate and professional drawings to bring your vision to life."
                  keywords="2d plans, elevations, architectural drawings, building plans, Patna, Bihar, Housekaar, home plans, construction drawings"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_2D_PLANS_IMAGE"
                  article={false}
                />
                <TwoDPlansElevations />
              </>
            }
          />
          <Route
            path="/three-d-architectural-modeling"
            element={
              <>
                <Seo
                  title="3D Architectural Modeling Services in Patna | Housekaar"
                  description="Visualize your architectural designs with our 3D modeling services in Patna. Housekaar brings your projects to life with detailed 3D representations."
                  keywords="3d architectural modeling, building modeling, architectural visualization, Patna, Bihar, Housekaar, 3d design, home modeling"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_3D_MODELING_IMAGE"
                  article={false}
                />
                <ThreeDArchitecturalModeling />
              </>
            }
          />
          <Route
            path="/three-d-rendering-visualization"
            element={
              <>
                <Seo
                  title="3D Rendering & Visualization Services in Patna | Housekaar"
                  description="Get realistic 3D renderings and visualizations for your projects in Patna. Housekaar creates stunning visuals to help you make informed decisions."
                  keywords="3d rendering, architectural visualization, building rendering, Patna, Bihar, Housekaar, 3d visualization, home rendering"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_3D_RENDERING_IMAGE"
                  article={false}
                />
                <ThreeDRenderingVisualization />
              </>
            }
          />
          <Route
            path="/building-information-modeling"
            element={
              <>
                <Seo
                  title="Building Information Modeling (BIM) Services in Patna | Housekaar"
                  description="Optimize your construction projects with our BIM services in Patna. Housekaar provides accurate and efficient building information modeling solutions."
                  keywords="building information modeling, BIM services, construction modeling, Patna, Bihar, Housekaar, building design, architectural modeling"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_BIM_IMAGE"
                  article={false}
                />
                <BuildingInformationModeling />
              </>
            }
          />
          <Route
            path="/virtual-tours-walkthroughs"
            element={
              <>
                <Seo
                  title="Virtual Tours & Walkthroughs in Patna | Housekaar"
                  description="Experience your future spaces with our virtual tours and walkthroughs in Patna. Housekaar provides immersive experiences for your architectural designs."
                  keywords="virtual tours, architectural walkthroughs, 3d tours, Patna, Bihar, Housekaar, building tours, home walkthroughs"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_VIRTUAL_TOURS_IMAGE"
                  article={false}
                />
                <VirtualToursWalkthroughs />
              </>
            }
          />
          <Route
            path="/three-d-interior-design"
            element={
              <>
                <Seo
                  title="3D Interior Design Services in Patna | Housekaar"
                  description="Visualize your interior spaces with our 3D interior design services in Patna. Housekaar creates realistic and detailed 3D representations of your interiors."
                  keywords="3d interior design, interior visualization, home design, Patna, Bihar, Housekaar, 3d interior, interior modeling"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_3D_INTERIOR_IMAGE"
                  article={false}
                />
                <ThreeDInteriorDesign />
              </>
            }
          />
          <Route
            path="/residential-construction"
            element={
              <>
                <Seo
                  title="Residential Construction Services in Patna | Housekaar"
                  description="Build your dream home with our residential construction services in Patna. Housekaar delivers quality homes with expert craftsmanship and attention to detail."
                  keywords="residential construction, home building, house construction, Patna, Bihar, Housekaar, home construction services, residential builders"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_RESIDENTIAL_CONSTRUCTION_IMAGE"
                  article={false}
                />
                <ResidentialConstruction />
              </>
            }
          />
          <Route
            path="/commercial-construction"
            element={
              <>
                <Seo
                  title="Commercial Construction Services in Patna | Housekaar"
                  description="Build your business spaces with our commercial construction services in Patna. Housekaar delivers quality commercial buildings tailored to your business needs."
                  keywords="commercial construction, building construction, office construction, Patna, Bihar, Housekaar, commercial builders, construction services"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_COMMERCIAL_CONSTRUCTION_IMAGE"
                  article={false}
                />
                <CommercialConstruction />
              </>
            }
          />
          <Route
            path="/renovations"
            element={
              <>
                <Seo
                  title="Renovation Services in Patna | Housekaar"
                  description="Transform your existing spaces with our renovation services in Patna. Housekaar provides quality renovations to enhance the functionality and aesthetics of your home or office."
                  keywords="renovation services, home renovation, office renovation, Patna, Bihar, Housekaar, building renovation, remodeling services"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_RENOVATIONS_IMAGE"
                  article={false}
                />
                <Renovations />
              </>
            }
          />
          <Route
            path="/footing-construction"
            element={
              <>
                <Seo
                  title="Footing Construction Services in Patna | Housekaar"
                  description="Ensure a strong foundation with our footing construction services in Patna. Housekaar provides expert footing construction for residential and commercial projects."
                  keywords="footing construction, foundation construction, building footing, Patna, Bihar, Housekaar, construction services, foundation services"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_FOOTING_CONSTRUCTION_IMAGE"
                  article={false}
                />
                <FootingConstruction />
              </>
            }
          />
          <Route
            path="/daily-checklists-inspections"
            element={
              <>
                <Seo
                  title="Daily Construction Checklists & Inspections in Patna | Housekaar"
                  description="Ensure project quality with our daily checklists and inspections in Patna. Housekaar maintains rigorous standards for every construction phase."
                  keywords="daily checklists, construction inspections, building quality control, Patna, Bihar, Housekaar, construction management, project inspections"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_CHECKLISTS_IMAGE"
                  article={false}
                />
                <DailyChecklistsInspections />
              </>
            }
          />
          <Route
            path="/progress-reports-documentation"
            element={
              <>
                <Seo
                  title="Construction Progress Reports & Documentation in Patna | Housekaar"
                  description="Stay informed with detailed progress reports and documentation in Patna. Housekaar ensures transparency and accountability throughout your project."
                  keywords="construction progress reports, project documentation, building reports, Patna, Bihar, Housekaar, project management, construction records"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_REPORTS_IMAGE"
                  article={false}
                />
                <ProgressReportsDocumentation />
              </>
            }
          />
          <Route
            path="/communication-collaboration"
            element={
              <>
                <Seo
                  title="Construction Communication & Collaboration in Patna | Housekaar"
                  description="Experience seamless communication and collaboration for your construction projects in Patna. Housekaar fosters teamwork for efficient project delivery."
                  keywords="construction communication, project collaboration, team communication, Patna, Bihar, Housekaar, project management, building coordination"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_COMMUNICATION_IMAGE"
                  article={false}
                />
                <CommunicationCollaboration />
              </>
            }
          />
          <Route
            path="/safety-protocols-compliance"
            element={
              <>
                <Seo
                  title="Construction Safety Protocols & Compliance in Patna | Housekaar"
                  description="Ensure safety and compliance with our construction protocols in Patna. Housekaar adheres to strict safety standards for every project."
                  keywords="construction safety, safety protocols, building compliance, Patna, Bihar, Housekaar, project safety, construction regulations"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_SAFETY_IMAGE"
                  article={false}
                />
                <SafetyProtocolsCompliance />
              </>
            }
          />
          <Route
            path="/material-management-inventory"
            element={
              <>
                <Seo
                  title="Construction Material Management & Inventory in Patna | Housekaar"
                  description="Efficient material management and inventory control for your construction projects in Patna. Housekaar ensures timely delivery and cost-effectiveness."
                  keywords="construction materials, material management, building inventory, Patna, Bihar, Housekaar, project materials, construction supplies"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_MATERIALS_IMAGE"
                  article={false}
                />
                <MaterialManagementInventory />
              </>
            }
          />
          <Route
            path="/quality-assurance-control"
            element={
              <>
                <Seo
                  title="Construction Quality Assurance & Control in Patna | Housekaar"
                  description="Guarantee quality construction with our assurance and control services in Patna. Housekaar ensures every project meets the highest standards."
                  keywords="construction quality assurance, quality control, building quality, Patna, Bihar, Housekaar, project quality, construction standards"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_QUALITY_IMAGE"
                  article={false}
                />
                <QualityAssuranceControl />
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Seo
                  title="Privacy Policy | Housekaar Construction in Patna"
                  description="Read our privacy policy to understand how Housekaar Construction in Patna collects, uses, and protects your personal information. We respect your privacy."
                  keywords="privacy policy, data protection, user privacy, Patna, Bihar, Housekaar, website privacy, information security"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_PRIVACY_POLICY_IMAGE"
                  article={false}
                />
                <PrivacyPolicy />
              </>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <>
                <Seo
                  title="Terms of Service | Housekaar Construction in Patna"
                  description="Review our terms of service for using Housekaar Construction's website and services in Patna. Understand your rights and responsibilities."
                  keywords="terms of service, website terms, service agreement, Patna, Bihar, Housekaar, user agreement, legal terms"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_TERMS_OF_SERVICE_IMAGE"
                  article={false}
                />
                <TermsOfService />
              </>
            }
          />
          <Route
            path="/cookie-policy"
            element={
              <>
                <Seo
                  title="Cookie Policy | Housekaar Construction in Patna"
                  description="Our cookie policy explains how we use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Understand your choices and manage your settings on Housekaar's website in Patna."
                  keywords="cookie policy, cookies, website cookies, privacy, data protection, GDPR, CCPA, cookie management, Patna, Bihar, Housekaar"
                  location="Patna, Bihar"
                  imageUrl="URL_TO_COOKIE_POLICY_IMAGE"
                  article={false}
                />
                <CookiePolicy />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;