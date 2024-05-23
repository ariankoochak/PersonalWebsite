import React from 'react'
import { useSelector } from 'react-redux';
import SkillTag from '../SkillTag/SkillTag';
import jsLogoSrc from '../../Assets/Images/JsLogo.webp'
import reactLogoSrc from "../../Assets/Images/ReactLogo.webp";
import nodeLogoSrc from "../../Assets/Images/NodeJsLogo.webp";
import sqlServerLogoSrc from "../../Assets/Images/SqlServerLogo.webp";
import htmlLogoSrc from "../../Assets/Images/HtmlLogo.webp";
import cssLogoSrc from "../../Assets/Images/CssLogo.webp";
import cppLogoSrc from "../../Assets/Images/CppLogo.webp";
import expressLogoSrc from "../../Assets/Images/ExpressJsLogo.webp";
import pythonLogoSrc from "../../Assets/Images/PythonLogo.webp";
import nextJsLogoSrc from "../../Assets/Images/NextJsLogo.webp";
import mongoDBLogoSrc from "../../Assets/Images/MongoDbLogo.webp"




export default function MySkillsDiv() {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
  return (
      <div
          className={`common-styles-div my-skills-div ${mainColor.backgroundColorDiv}`}
      >
          <h2 className={`divs-title ${mainColor.color}`}>My Skills</h2>
          <div className="skills">
              <SkillTag skillName="JavaScript" skillIconSrc={jsLogoSrc} />
              <SkillTag skillName="React JS" skillIconSrc={reactLogoSrc} />
              <SkillTag skillName="Node JS" skillIconSrc={nodeLogoSrc} />
              <SkillTag skillName="Sql Server" skillIconSrc={sqlServerLogoSrc} />
              <SkillTag skillName="Next JS" skillIconSrc={nextJsLogoSrc} />
              <SkillTag skillName="HTML" skillIconSrc={htmlLogoSrc} />
              <SkillTag skillName="CSS" skillIconSrc={cssLogoSrc} />
              <SkillTag skillName="C++" skillIconSrc={cppLogoSrc} />
              <SkillTag skillName="Express JS" skillIconSrc={expressLogoSrc} />
              <SkillTag skillName="Python" skillIconSrc={pythonLogoSrc} />
              <SkillTag skillName="MongoDB" skillIconSrc={mongoDBLogoSrc} />
          </div>
      </div>
  );
}
