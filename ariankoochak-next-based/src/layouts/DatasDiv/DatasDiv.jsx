import React, { useState } from "react";
import CertificatesMainDatas from "../../resumeDatas/CertificatesMainDatas/CertificatesMainDatas";
import AwardsMainDatas from "../../resumeDatas/AwardsMainDatas/AwardsMainDatas";
import ProjectsMainDatas from "../../resumeDatas/ProjectsMainDatas/ProjectsMainDatas";
import ExperienceMainDatas from "../../resumeDatas/ExperienceMainDatas/ExperienceMainDatas";

export default function DatasDiv() {
    const handleClickTab = (e) => {
        SetActiveTab(e.target.innerText);
    };
    const tabs = [
        {
            name: "Certificates ",
            code: (
                <h3 onClick={handleClickTab} key="Certificates">
                    Certificates{" "}
                    <i className="fa-solid fa-file-certificate"></i>
                </h3>
            ),
        },
        {
            name: "Awards ",
            code: (
                <h3 onClick={handleClickTab} key="Awards">
                    Awards <i className="fa-solid fa-award"></i>
                </h3>
            ),
        },
        {
            name: "Projects ",
            code: (
                <h3 onClick={handleClickTab} key="Projects">
                    Projects <i className="fa-solid fa-code"></i>
                </h3>
            ),
        },
        {
            name: "Experiences ",
            code: (
                <h3 onClick={handleClickTab} key="Experiences">
                    Experiences{" "}
                    <i className="fa-solid fa-rectangle-history"></i>
                </h3>
            ),
        },
    ];
    const [activeTab, SetActiveTab] = useState("Certificates ");
    const handleActiveTabDatas = () => {
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
    };
    const handleRenderOtherstab = () => {
        return tabs.map((tab) => {
            if (tab.name !== activeTab) {
                return tab.code;
            }
            return "";
        });
    };

    return (
        <div className={`common-styles-div datas-div persian-blue-div-color`}>
            <div className="header">
                <div className="selected-head">
                    <h2 className={`divs-title persian-blue-color`}>
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
            <div className="main-datas">{handleActiveTabDatas()}</div>
        </div>
    );
}
