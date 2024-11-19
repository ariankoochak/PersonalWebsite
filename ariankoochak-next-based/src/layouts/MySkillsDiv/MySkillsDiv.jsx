
import SkillTag from "../../components/SkillTag/SkillTag";




export default function MySkillsDiv({data}) {
    return (
        <div
            className={`common-styles-div my-skills-div persian-blue-div-color`}
        >
            <h2 className={`divs-title persian-blue-color`}>My Skills</h2>
            <div className="skills">
                {data.map((skill)=><SkillTag key={skill.skillName} skillName={skill.skillName} skillIconSrc={skill.skillIconSrc}/>)}
            </div>
        </div>
    );
}
