import React from 'react'
import { useSelector } from 'react-redux';
import CertificatesMainDatas from '../CertificatesMainDatas/CertificatesMainDatas';
import AwardsMainDatas from '../AwardsMainDatas/AwardsMainDatas';
import ProjectsMainDatas from '../ProjectsMainDatas/ProjectsMainDatas';

export default function DatasDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);

  return (
      <div
          className={`common-styles-div datas-div ${mainColor.backgroundColorDiv}`}
      >
          <div className="header">
              <div className="selected-head">
                  <h2 className={`divs-title ${mainColor.color}`}>
                      Certificates
                  </h2>
              </div>
              <div className="head-options">
                  <h3>Awards <i className="fa-solid fa-award"></i></h3>
                  <h3>Experience <i className="fa-solid fa-rectangle-history"></i></h3>
                  <h3>Projects <i className="fa-solid fa-code"></i></h3>
              </div>
          </div>
          <div className="line"></div>
          <div className='main-datas'>
              {/* <CertificatesMainDatas/> */}
              {/* <AwardsMainDatas/> */}
              <ProjectsMainDatas/>
          </div>
      </div>
  );
}
