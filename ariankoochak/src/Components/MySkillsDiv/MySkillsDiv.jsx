import React from 'react'
import { useSelector } from 'react-redux';
import SkillTag from '../SkillTag/SkillTag';
import jsLogoSrc from '../../Assets/Images/JsLogo.png'
import reactLogoSrc from "../../Assets/Images/ReactLogo.png";
import nodeLogoSrc from "../../Assets/Images/NodeJsLogo.png";
import sqlServerLogoSrc from "../../Assets/Images/SqlServerLogo.png";
import htmlLogoSrc from "../../Assets/Images/HtmlLogo.png";
import cssLogoSrc from "../../Assets/Images/CssLogo.png";
import cppLogoSrc from "../../Assets/Images/CppLogo.png";
import expressLogoSrc from "../../Assets/Images/ExpressJsLogo.png";
import pythonLogoSrc from "../../Assets/Images/PythonLogo.png";
import nextJsLogoSrc from "../../Assets/Images/NextJsLogo.png";




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
          </div>
      </div>
  );
}
