import React from 'react'
import { useSelector } from "react-redux";
import profilePhotoSrc from '../../Assets/Images/profile.jpg'

export default function ImageDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);

  return (
      <div className={`common-styles-div image-div ${mainColor.backgroundColorDiv}`}>
          <img src={profilePhotoSrc} alt="arian koochak"/>
      </div>
  );
}
