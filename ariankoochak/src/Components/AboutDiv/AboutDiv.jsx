import React from 'react'
import { useSelector } from 'react-redux';

export default function AboutDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);

  return (
      <div
          className={`common-styles-div about-div ${mainColor.backgroundColorDiv}`}
      >
          <h2 className={`divs-title ${mainColor.color}`}>About Me</h2>
      </div>
  );
}
