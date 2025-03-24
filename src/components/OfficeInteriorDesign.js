import React from 'react';
import './InteriorDesign.css';
import useScrollToTop from './useScrollToTop';
import ReusableLanding from './ReusableLanding';
import image2 from '../img/exterior.jpg';
import FAQ from './FAQ';
import officeInteriorFAQData from './officeInteriorFAQData';
import InquiryForm from './InquiryForm';
import WhyChooseUs from './WhyChooseUs.js';
import officeImg1 from '../img/pexels-pixabay-273671.jpg';
import officeImg2 from '../img/pexels-pixabay-221537.jpg';
import officeImg3 from '../img/pexels-jonathanborba-3316924.jpg';
import officeImg4 from '../img/pexels-atbo-66986-245240.jpg';

const OfficeInteriorDesign = () => {
  useScrollToTop();
  return (
    <>
      <ReusableLanding
        imageUrl={image2}
        title="Office Interior Design"
        description="A well-designed office space can significantly impact productivity, employee morale, and company image. At Housekaar, we create office interior designs that are both functional and inspiring."
      />
      <div className="interior-design-page">
        <section className="office-section">
          <div className="section-content">
            <h2>Workspaces and Collaboration Areas</h2>
            <p>
              We design workspaces that promote efficiency and collaboration. Our open-plan layouts, ergonomic furniture, and advanced technology integration create a dynamic and productive work environment.
            </p>
            <ul>
              <li>Open-plan and private office layouts</li>
              <li>Ergonomic furniture and workstation design</li>
              <li>Collaboration areas and meeting rooms</li>
              <li>Technology integration and cabling solutions</li>
            </ul>
          </div>
          <img src={officeImg1} alt="Workspaces and Collaboration Areas" className="section-image" />
        </section>

        <section className="office-section">
          <div className="section-content">
            <h2>Reception and Client Areas</h2>
            <p>
              The reception area is the first impression your clients have of your company, and we design spaces that are both welcoming and professional. Our client area designs create a comfortable and impressive environment for meetings and presentations.
            </p>
            <ul>
              <li>Reception desk and seating design</li>
              <li>Client meeting rooms and presentation areas</li>
              <li>Branding and signage integration</li>
              <li>Acoustic and soundproofing solutions</li>
            </ul>
          </div>
          <img src={officeImg2} alt="Reception and Client Areas" className="section-image" />
        </section>

        <section className="office-section">
          <div className="section-content">
            <h2>Break Rooms and Amenities</h2>
            <p>
              We understand the importance of employee well-being, and we design break rooms and amenities that provide a relaxing and rejuvenating space for employees. Our designs focus on creating a balance between functionality and comfort.
            </p>
            <ul>
              <li>Kitchenette and dining areas</li>
              <li>Lounge and relaxation spaces</li>
              <li>Recreation and fitness areas</li>
              <li>Storage and organization solutions</li>
            </ul>
          </div>
          <img src={officeImg3} alt="Break Rooms and Amenities" className="section-image" />
        </section>

        <section className="office-section">
          <div className="section-content">
            <h2>Sustainability and Innovation</h2>
            <p>
              We are committed to creating sustainable and innovative office designs that reduce environmental impact and promote employee well-being. From energy-efficient lighting and HVAC systems to eco-friendly materials and finishes, we incorporate sustainable practices into every aspect of our designs.
            </p>
          </div>
          <img src={officeImg4} alt="Sustainability and Innovation" className="section-image" />
        </section>
      </div>
      <WhyChooseUs />
      <InquiryForm />
      <FAQ faqData={officeInteriorFAQData} />
    </>
  );
};

export default OfficeInteriorDesign;