import React from 'react'
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import lewmarkLogoSrc from '../../Assets/Images/LewmarkLogo.webp'
import ZistabLogoSrc from "../../Assets/Images/ZistabLogo.webp";
import mosabpooyaLogoSrc from '../../Assets/Images/MosabpooyaLogo.webp'



export default function ExperienceMainDatas() {
  return (
      <>
          <ExperienceCard
              title="Full-stack Developer"
              issued="mosab pooya Company"
              issuedIconSrc={mosabpooyaLogoSrc}
              date="06/2024-present"
              City="Iran-Tehran"
          />
          <div className="line"></div>
          <ExperienceCard
              title="Front-End Developer(Remote) with React JS & React Native"
              issued="Lewmark Company"
              issuedIconSrc={lewmarkLogoSrc}
              date="07/2023-11/2023"
              City="England-manchester"
          />
          <div className="line"></div>
          <ExperienceCard
              title="IT manager"
              issued="Zistab Company"
              issuedIconSrc={ZistabLogoSrc}
              date="09/2022-06/2023"
              City="Iran-Tehran"
          />
      </>
  );
}
