import React from 'react'
import { useSelector } from "react-redux";

export default function ImageDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);

  return (
      <div className={`common-styles-div image-div ${mainColor.backgroundColorDiv}`}>
      </div>
  );
}
