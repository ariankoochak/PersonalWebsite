import React from 'react'
import { useSelector } from 'react-redux';

export default function AboutDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);

  return (
      <div
          className={`common-styles-div about-div ${mainColor.backgroundColorDiv}`}
      >
          <h2 className={`divs-title ${mainColor.color}`}>About Me</h2>
          <p>
              I started programming with C++ when I was 12 years old. During
              high school, I participated in global and domestic RoboCup
              competitions and won a place. In these competitions, I
              participated in the resuce simulation open league (Co Space). And
              I started working with javascript and I did various projects with
              javascript, react, node, mysql, which you can see in my GitHub.
              Now I am studying computer engineering in Tehran Azad University of
              Research Sciences.
          </p>
      </div>
  );
}
