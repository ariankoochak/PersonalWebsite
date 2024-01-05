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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, perferendis ducimus eaque cum suscipit animi minima repudiandae voluptates saepe hic neque officia odio, illum molestias eius doloribus dolorum provident eveniet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt perspiciatis consectetur cumque repellat, fugit animi minus doloribus commodi laudantium, quod nesciunt quibusdam harum, ut voluptatum explicabo. Modi, beatae nisi?
          </p>
      </div>
  );
}
