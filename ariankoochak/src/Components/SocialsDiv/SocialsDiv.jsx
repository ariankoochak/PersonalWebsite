import React from 'react'
import { useSelector } from 'react-redux';
import queraImageSrc from '../../Assets/Images/QueraLogo.webp'
export default function SocialsDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
  return (
      <div
          className={`common-styles-div socials-div ${mainColor.backgroundColorDiv}`}
      >
          <a href="https://www.instagram.com/ariankoochak/" target='_blank' rel="noreferrer">
          <div className="instagram">
              <i className="fa-brands fa-instagram"></i>
          </div>
          </a>

          <a href="https://www.linkedin.com/in/arian-koochak-281b36240/" target='_blank' rel="noreferrer">
          <div className="linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
          </div>
          </a>

          <a href="https://github.com/ariankoochak" target='_blank' rel="noreferrer">
              <div className="github" >
                  <i className="fa-brands fa-github"></i>
              </div>
          </a>
          <a href="https://quera.org/profile/DULDQ" target='_blank' rel="noreferrer">
          <div className="quera">
              <img loading='lazy' src={queraImageSrc} alt="quera" />
          </div>
          </a>
      </div>
  );
}
