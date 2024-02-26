import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CertificatesMainDatas from '../CertificatesMainDatas/CertificatesMainDatas';
import AwardsMainDatas from '../AwardsMainDatas/AwardsMainDatas';
import ProjectsMainDatas from '../ProjectsMainDatas/ProjectsMainDatas';
import ExperienceMainDatas from '../ExperienceMainDatas/ExperienceMainDatas';

export default function DatasDiv() {
  const handleClickTab = (e) => {
      SetActiveTab(e.target.innerText);
  };
  const tabs = [
    {
      name:'Certificates ',
      code:<h3 onClick={handleClickTab}>Certificates <i className="fa-solid fa-file-certificate"></i></h3>,
    },
    {
      name:"Awards ",
      code:<h3 onClick={handleClickTab}>Awards <i className="fa-solid fa-award"></i></h3>,
    },
    {
      name :"Projects ",
      code :<h3 onClick={handleClickTab}>Projects <i className="fa-solid fa-code"></i></h3>,
    },
    {
      name:"Experiences ",
      code:<h3 onClick={handleClickTab}>Experiences <i className="fa-solid fa-rectangle-history"></i></h3>,
    }
  ];
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
    const [activeTab, SetActiveTab] = useState("Certificates ");
    const handleActiveTabDatas = ()=>{
      console.log(activeTab);
      switch (activeTab) {
          case "Certificates ":
              return <CertificatesMainDatas />;
          case "Awards ":
              return <AwardsMainDatas />;
          case "Projects ":
              return <ProjectsMainDatas />;
          case "Experiences ":
              return <ExperienceMainDatas />;
          default:
              SetActiveTab("Certificates ");
      }
    }
    const handleRenderOtherstab = ()=>{
      return tabs.map((tab)=>{
        if(tab.name !== activeTab){
          return tab.code
        }
        return ''
      })
    }
    
  return (
      <div
          className={`common-styles-div datas-div ${mainColor.backgroundColorDiv}`}
      >
          <div className="header">
              <div className="selected-head">
                  <h2 className={`divs-title ${mainColor.color}`}>
                      {activeTab}
                  </h2>
              </div>
              <div className="head-options">
                  {/* <h3>Awards <i className="fa-solid fa-award"></i></h3>
                  <h3>Experiences <i className="fa-solid fa-rectangle-history"></i></h3>
                  <h3>Projects <i className="fa-solid fa-code"></i></h3> */}
                  {handleRenderOtherstab()}
              </div>
          </div>
          <div className="line"></div>
          <div className='main-datas'>
            {handleActiveTabDatas()}
          </div>
      </div>
  );
}
