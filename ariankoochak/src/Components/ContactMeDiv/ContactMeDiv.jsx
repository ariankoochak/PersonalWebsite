import React from 'react'
import { useSelector } from 'react-redux';

export default function ContactMeDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
const handleContactMeClick = ()=>{
    window.open(
        "mailto:arian.koochak@protonmail.com"
    );
}
  return (
      <div
          className={`common-styles-div contact-div ${mainColor.backgroundColorDiv}`}
      >
          <div className="contact-container">
              <span>I’m available for work</span>
              <button className="contact-me-btn" onClick={handleContactMeClick}>
                  <i class="fa-solid fa-circle"></i> Contact me
              </button>
              <button
                  className={`download-cv-btn ${mainColor.backgroundColor}`}
              >
                  <i className="fa-solid fa-download"></i> Download CV
              </button>
          </div>
      </div>
  );
}


