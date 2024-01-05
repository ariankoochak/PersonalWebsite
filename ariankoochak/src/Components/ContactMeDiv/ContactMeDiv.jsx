import React from 'react'
import { useSelector } from 'react-redux';

export default function ContactMeDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);

  return (
      <div
          className={`common-styles-div contact-div ${mainColor.backgroundColorDiv}`}
      >
          <div className="contact-container">
              <span>I’m available for work</span>
              <button className="contact-me-btn">Contact me</button>
              <button
                  className={`download-cv-btn ${mainColor.backgroundColor}`}
              >
                  Download CV
              </button>
          </div>
      </div>
  );
}
