import React from 'react'
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import lewmarkLogoSrc from '../../Assets/Images/LewmarkLogo.jpg'
import ZistabLogoSrc from "../../Assets/Images/ZistabLogo.jpg";



export default function ExperienceMainDatas() {
  return (
      <>
          <ExperienceCard
              title="IT manager"
              issued="Zistab Company"
              issuedIconSrc={ZistabLogoSrc}
              year="2022-2023"
              City="Iran-Tehran"
          />
          <div className="line"></div>
          <ExperienceCard
              title="Front-End Developer(Remote) with React JS & React Native"
              issued="Lewmark Company"
              issuedIconSrc={lewmarkLogoSrc}
              year="2019-2020"
              City="England-manchester"
          />
      </>
  );
}
