import React from 'react'
import { useSelector } from 'react-redux';
import queraImageSrc from '../../Assets/Images/QueraLogo.png'
export default function SocialsDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
  return (
      <div
          className={`common-styles-div socials-div ${mainColor.backgroundColorDiv}`}
      >
          <div className="instagram">
              <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="github">
              <i className="fa-brands fa-github"></i>
          </div>
          <div className="quera">
            <img src={queraImageSrc} alt="quera" />
          </div>
      </div>
  );
}
