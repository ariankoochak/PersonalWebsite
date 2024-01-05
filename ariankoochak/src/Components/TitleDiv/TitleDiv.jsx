import React from 'react'
import { useSelector } from "react-redux";

export default function TitleDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
  return (
      <div
          className={`common-styles-div title-div ${mainColor.backgroundColorDiv}`}
      >
          <h2>
              Hi! I’m{" "}
              <span className={`${mainColor.color}`}>Arian Koochak</span>
          </h2>
          <h3>a Full-Stack Developer</h3>
      </div>
  );
}
