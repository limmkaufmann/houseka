import React from 'react';
import './InteriorDesign.css';
import useScrollToTop from './useScrollToTop'; // Use the same CSS file
import ReusableLanding from './ReusableLanding';
import image2 from '../img/exterior.jpg';
import kitchenimg from '../img/WhatsApp Image 2025-03-19 at 9.40.16 PM.jpeg';
import kitchenimg2 from '../img/WhatsApp Image 2025-03-19 at 9.40.17 PM (1).jpeg';
import kitchenimg3 from '../img/WhatsApp Image 2025-03-19 at 9.40.17 PM (2).jpeg';
import kitchenimg4 from '../img/WhatsApp Image 2025-03-19 at 9.40.17 PM.jpeg';
import kitchenimg5 from '../img/WhatsApp Image 2025-03-19 at 9.40.18 PM.jpeg';

const DesignIdeas = () => {
    useScrollToTop();
  return (
    <>
     <ReusableLanding
      imageUrl={image2}
      title="Design Ideas"
      description="Looking for inspiration for your next interior design project? At Housekaar, we curate a collection of design ideas that showcase the latest trends and styles in home and office interiors."
    />
    <div className="interior-design-page">

      <section>
        <h2>Modern Minimalist Design</h2>
        <p>
          Modern minimalist design focuses on simplicity, clean lines, and functionality. We use neutral color palettes, natural materials, and minimal decor to create a serene and uncluttered space.
        </p>
        <div className="kitchen-images">
            <img src={kitchenimg} alt="Kitchen Design 1" />
            <img src={kitchenimg2} alt="Kitchen Design 2" />
            <img src={kitchenimg3} alt="Kitchen Design 3" />
          </div>
        <ul>
          <li>Open-plan layouts</li>
          <li>Neutral color palettes</li>
          <li>Minimalist furniture and decor</li>
          <li>Natural materials and finishes</li>
        </ul>
      </section>

      <section>
        <h2>Industrial Chic Design</h2>
        <p>
          Industrial chic design combines raw and unfinished elements with modern and sophisticated touches. We use exposed brick, metal accents, and vintage furniture to create a unique and edgy look.
        </p>
        <div className="kitchen-images">
            <img src={kitchenimg3} alt="Kitchen Design 3" />
            <img src={kitchenimg4} alt="Kitchen Design 4" />
            <img src={kitchenimg5} alt="Kitchen Design 5" />
          </div>
        <ul>
          <li>Exposed brick and concrete walls</li>
          <li>Metal accents and lighting fixtures</li>
          <li>Vintage and reclaimed furniture</li>
          <li>Raw and unfinished materials</li>
        </ul>
      </section>

      <section>
        <h2>Bohemian Eclectic Design</h2>
        <p>
          Bohemian eclectic design is all about mixing and matching patterns, colors, and textures to create a vibrant and eclectic space. We use a variety of textiles, plants, and travel-inspired decor to create a warm and inviting atmosphere.
        </p>
        <div className="kitchen-images">
            <img src={kitchenimg} alt="Kitchen Design 1" />
            <img src={kitchenimg2} alt="Kitchen Design 2" />
            <img src={kitchenimg5} alt="Kitchen Design 5" />
          </div>
        <ul>
          <li>Mix and match patterns and colors</li>
          <li>Textiles and rugs</li>
          <li>Plants and greenery</li>
          <li>Travel-inspired decor</li>
        </ul>
      </section>

      <section>
        <h2>Sustainable and Eco-Friendly Design</h2>
        <p>
          Sustainable and eco-friendly design focuses on using natural materials, energy-efficient appliances, and eco-friendly practices to create a healthy and environmentally responsible space.
        </p>
        <div className="kitchen-images">
            <img src={kitchenimg} alt="Kitchen Design 1" />
            <img src={kitchenimg5} alt="Kitchen Design 5" />
          </div>
        <ul>
          <li>Natural and reclaimed materials</li>
          <li>Energy-efficient appliances and lighting</li>
          <li>Indoor plants and air-purifying systems</li>
          <li>Sustainable furniture and decor</li>
        </ul>
      </section>

    </div>
    </>
  );
};

export default DesignIdeas;