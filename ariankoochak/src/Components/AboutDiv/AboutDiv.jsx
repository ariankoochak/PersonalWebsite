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
              participated in the rescue simulation open league (Co-Space) And
              I started working with Javascript and I did various projects with
              Javascript, React js, Node js, Mysql, which you can see in my GitHub.
              Now I am studying computer engineering in Tehran Azad University
              of Research Sciences And in the future, I want to enter and work
              more in the fields of AI and blockchain.
          </p>
      </div>
  );
}
