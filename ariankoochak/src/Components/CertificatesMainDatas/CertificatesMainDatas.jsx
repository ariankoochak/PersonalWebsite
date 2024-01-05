import React from 'react'
import CertificateCard from '../CertificateCard/CertificateCard'
import mtfLogoSrc from '../../Assets/Images/MftLogo.jpg'
import sharifLogoSrc from "../../Assets/Images/SharifLogo.jpg";
import rahsaLogoSrc from "../../Assets/Images/RahsaLogo.jpg";


export default function CertificatesMainDatas() {
  return (
      <>
          <CertificateCard
              title="JavaScript & Ajax & jQuery"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="JavaScript/Ajax/jQuery"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="React JS"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="React/NextJS/Redux"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="React JS"
              institute="Sharif University of Technology"
              instituteIconSrc={sharifLogoSrc}
              techs="React/Redux"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="HTML & CSS"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="HTML/CSS"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="SQL Server"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="Database/T-Sql/Sql server"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="Python"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="Python"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="Introduction to machine learning"
              institute="Rahsa Educational Industrial Group"
              instituteIconSrc={rahsaLogoSrc}
              techs="Python/AI"
              year="2023"
          />
      </>
  );
}
