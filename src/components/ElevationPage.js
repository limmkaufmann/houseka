import React from 'react';
import './ElevationPage.css';
import useScrollToTop from './useScrollToTop'; // Create ElevationPage.css
import ReusableLanding from './ReusableLanding';
import FAQ from './FAQ';
import image1 from '../img/13-best-tools-cover.jpg';
import image2 from '../img/WhatsApp Image 2025-03-19 at 9.30.09 PM.jpeg';
import image3 from '../img/WhatsApp Image 2025-03-19 at 9.32.45 PM.jpeg';
import image4 from '../img/WhatsApp Image 2025-03-19 at 9.33.29 PM.jpeg';
import image5 from '../img/WhatsApp Image 2025-03-19 at 9.33.49 PM.jpeg';
import image6 from '../img/WhatsApp Image 2025-03-19 at 9.35.21 PM.jpeg';
import image7 from '../img/WhatsApp Image 2025-03-19 at 9.35.41 PM.jpeg';
import image8 from '../img/WhatsApp Image 2025-03-19 at 9.40.07 PM.jpeg';
import image9 from '../img/WhatsApp Image 2025-03-19 at 9.40.08 PM.jpeg';
import image10 from '../img/WhatsApp Image 2025-03-19 at 9.40.10 PM (1).jpeg';
import image11 from '../img/WhatsApp Image 2025-03-19 at 9.40.10 PM (2).jpeg';
import image12 from '../img/WhatsApp Image 2025-03-19 at 9.40.10 PM.jpeg';
import image13 from '../img/WhatsApp Image 2025-03-19 at 9.40.19 PM (1).jpeg';
import image14 from '../img/WhatsApp Image 2025-03-19 at 9.40.19 PM.jpeg';
import image15 from '../img/WhatsApp Image 2025-03-19 at 9.40.22 PM.jpeg';
import image16 from '../img/WhatsApp Image 2025-03-19 at 9.40.23 PM.jpeg';
import elevationFAQData from './ElevationFAQData';
import InquiryForm from './InquiryForm';
import ServiceFeatures from './ServiceFeatures';
import { FaSyncAlt, FaComments,FaCheckCircle } from 'react-icons/fa';

const ElevationPage = () => {
  useScrollToTop();
  const elevations = [
    {
      id: 1,
      image: image2, // Replace with your image path
      description: 'A detailed front elevation showcasing the modern design and architectural features.',
    },
    {
      id: 2,
      image: image3, // Replace with your image path
      description: 'A side elevation highlighting the building’s structural design and material choices.',
    },
    {
      id: 3,
      image: image4, // Replace with your image path
      description: 'The rear elevation view of the renovated house, displaying the updated design and layout.',
    },
    {
      id: 4,
      image: image5,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 5,
      image: image6,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 6,
      image: image7,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 7,
      image: image8,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 8,
      image: image9,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 9,
      image: image10,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 10,
      image: image11,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 11,
      image: image12,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 12,
      image: image13,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 13,
      image: image14,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 14,
      image: image15,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    {
      id: 15,
      image: image16,
      description: 'Detailed elevation of a luxury apartment complex, showing the intricate design and high-quality finishes.',
    },
    // Add more elevations as needed
  ];

  const featuresData = [
    {
      icon: <FaSyncAlt />,
      text: 'Multiple design revisions',
    },
    {
      icon: <FaComments />,
      text: 'Free consultation with experts',
    },
    {
      icon: <FaCheckCircle />,
      text: '100% satisfaction guarantee',
    },
  ];

  return (
    <div className="elevation-page">
       <ReusableLanding
      imageUrl={image1}
      title="Architectural Elevations: Visualize Your Home's Exterior"
      description="Explore detailed elevation drawings showcasing the exterior design and architectural features of our custom home projects."
    />
      <h1>House Elevation Designs - 3D Front Elevation Designs</h1>
      <div class="elevation-description">
  <p>
    3D House elevation designs can help visualize the proposed appearance of the exterior view and design of the house from any side e.g. front, back, corner or any other side. The main purpose of the building elevation design is to help you visualize the finished appearance of the exterior design of a building from a particular side or corner.
  </p>
  <p>
    Front house elevation design can show you the appearance of the building from the front side. Similarly, back elevation design of the building can show the finished appearance of the building from the back side. 3D Building elevation designs can be created for all sides and corners of the building, including day view and night view of the building.
  </p>
</div>
      <div className="elevation-grid">
        {elevations.map((elevation) => (
          <div className="elevation-card" key={elevation.id}>
            <img src={elevation.image} alt={elevation.title} className="elevation-image" />
            <div className="elevation-details">
              <h2>{elevation.title}</h2>
              <p>{elevation.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div class="elevation-construction">
  <div class="elevation-content">
    <h2>Architectural Elevations: Building Your Vision</h2>
    <p>
      Architectural elevations are orthographic projections that show the exterior
      sides of a building. They provide a clear view of the building's facade,
      including its height, width, and architectural features.
    </p>

    <h3>Why Elevations Are Important</h3>
    <ul>
      <li>
        <strong>Visual Representation:</strong> Elevations help visualize the final
        appearance of the building.
      </li>
      <li>
        <strong>Construction Guidance:</strong> They provide precise measurements
        and details for builders.
      </li>
      <li>
        <strong>Design Communication:</strong> Elevations facilitate communication
        between designers, clients, and contractors.
      </li>
      <li>
        <strong>Aesthetic Planning:</strong> they help to plan the look and feel of the outside of the home.
      </li>
    </ul>

    <h3>Our Elevation Design Services</h3>
    <p>
      We create detailed and accurate elevation drawings, including:
    </p>
    <ul>
      <li>Front elevations</li>
      <li>Rear elevations</li>
      <li>Side elevations</li>
      <li>3D elevation renderings</li>
      <li>Day and night views</li>
    </ul>

    <div class="elevation-examples">
      <h3>Elevation Examples</h3>
      <div class="elevation-image-container">
        <img src={image2} alt="Front Elevation Example" />
        <img src= {image9} alt="Side Elevation Example" />
        <img src={image3} alt="3D Elevation Example" />
      </div>
    </div>
  </div>
</div>
      
      <InquiryForm/>
      <FAQ faqData={elevationFAQData} /> 
      <ServiceFeatures features={featuresData}/>
    </div>
  );
};

export default ElevationPage;