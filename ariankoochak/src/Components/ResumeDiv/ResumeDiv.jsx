import React from 'react'
import { useSelector } from 'react-redux';

export default function ResumeDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
  return (
      <div
          className={`common-styles-div resume-div ${mainColor.backgroundColorDiv}`}
      >
          <h2 className={`divs-title ${mainColor.color}`}>Resume</h2>
          <div className="resume-data">
              <div className="age">
                  <span className="title">Age</span>
                  <span className="value">20Years</span>
              </div>
              <div className="city">
                  <span className="title">City</span>
                  <span className="value">Iran,Tehran</span>
              </div>
              <div className="military">
                  <span className="title">military service status</span>
                  <span className="value">education pardon</span>
              </div>
              <div className="email">
                  <span className="title">Email</span>
                  <span className="value">arian.koochak@protonmail.com</span>
              </div>
          </div>
      </div>
  );
}
