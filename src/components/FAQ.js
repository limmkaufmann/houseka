import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ faqData }) => { // Accept faqData as a prop
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {item.question}
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>
              {openIndex === index ? '▲' : '▼'}
            </span>
          </div>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;