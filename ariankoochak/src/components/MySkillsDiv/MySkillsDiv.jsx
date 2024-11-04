import React from "react";
import SkillTag from "../SkillTag/SkillTag";


const jsLogoSrc = "/Images/JsLogo.webp";
const reactLogoSrc = "/Images/ReactLogo.webp";
const nodeLogoSrc = "/Images/NodeJsLogo.webp";
const sqlServerLogoSrc = "Images/SqlServerLogo.webp";
const cppLogoSrc = "Images/CppLogo.webp";
const expressLogoSrc = "/Images/ExpressJsLogo.webp";
const pythonLogoSrc = "/Images/PythonLogo.webp";
const nextJsLogoSrc = "/Images/NextJsLogo.webp";
const mongoDBLogoSrc = "/Images/MongoDbLogo.webp";

export default function MySkillsDiv() {
    return (
        <div
            className={`common-styles-div my-skills-div persian-blue-div-color`}
        >
            <h2 className={`divs-title persian-blue-color`}>My Skills</h2>
            <div className="skills">
                <SkillTag skillName="JavaScript" skillIconSrc={jsLogoSrc} />
                <SkillTag skillName="React JS" skillIconSrc={reactLogoSrc} />
                <SkillTag skillName="Node JS" skillIconSrc={nodeLogoSrc} />
                <SkillTag
                    skillName="Sql Server"
                    skillIconSrc={sqlServerLogoSrc}
                />
                <SkillTag skillName="Next JS" skillIconSrc={nextJsLogoSrc} />
                <SkillTag skillName="C++" skillIconSrc={cppLogoSrc} />
                <SkillTag
                    skillName="Express JS"
                    skillIconSrc={expressLogoSrc}
                />
                <SkillTag skillName="Python" skillIconSrc={pythonLogoSrc} />
                <SkillTag skillName="MongoDB" skillIconSrc={mongoDBLogoSrc} />
            </div>
        </div>
    );
}
