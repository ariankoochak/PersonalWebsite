import React from 'react'
import CertificateCard from '../CertificateCard/CertificateCard'
import mtfLogoSrc from '../../Assets/Images/MftLogo.webp'
import sharifLogoSrc from "../../Assets/Images/SharifLogo.webp";
import rahsaLogoSrc from "../../Assets/Images/RahsaLogo.webp";
import queraLogoSrc from '../../Assets/Images/queraLogoForCertificate.webp'
import maktabkhoonehLogoSrc from "../../Assets/Images/maktabkhoonehLogo.webp";



export default function CertificatesMainDatas() {
  return (
      <>
          <CertificateCard
              title="No-SQL Databases"
              institute="Quera"
              instituteIconSrc={queraLogoSrc}
              techs="Redis/MongoDb/Neo4j/Cassandra/ElasticSearch"
              year="2024"
          />
          <div className="line"></div>
          <CertificateCard
              title="Node JS"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="Node/mongoDB/Redis/Express"
              year="2024"
          />
          <div className="line"></div>
          <CertificateCard
              title="Node JS"
              institute="Maktabkhooneh"
              instituteIconSrc={maktabkhoonehLogoSrc}
              techs="Node/Express/MongoDB"
              year="2024"
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
              title="React JS"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="React/NextJS/Redux"
              year="2023"
          />
          <div className="line"></div>
          <CertificateCard
              title="JavaScript & Ajax & jQuery"
              institute="Tehran Institute of Technology"
              instituteIconSrc={mtfLogoSrc}
              techs="JavaScript/Ajax/jQuery"
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
