import AboutDiv from "@/layouts/AboutDiv/AboutDiv";
import ColorChanger from "@/layouts/ColorChanger/ColorChanger";
import ContactMeDiv from "@/layouts/ContactMeDiv/ContactMeDiv";
import DatasDiv from "@/layouts/DatasDiv/DatasDiv";
import ImageDiv from "@/layouts/ImageDiv/ImageDiv";
import MySkillsDiv from "@/layouts/MySkillsDiv/MySkillsDiv";
import ResumeDiv from "@/layouts/ResumeDiv/ResumeDiv";
import SocialsDiv from "@/layouts/SocialsDiv/SocialsDiv";
import TitleDiv from "@/layouts/TitleDiv/TitleDiv";

import awardsData from "../../data/awards.data";
import certificatesData from "../../data/certificates.data";
import experiencesData from "../../data/experiences.data";
import projectsData from "../../data/projects.data";
import personalInfoData from "../../data/personalInfo.data";
import skillsData from "../../data/skills.data";

export default function HomePage({
    awardData,
    certificateData,
    experienceData,
    projectData,
    personalInfo,
    skillsData,
}) {
    return (
        <section className="main">
            <section className="container">
                <ColorChanger />
                <article className="contact-and-me-data">
                    <TitleDiv />
                    <div className="image-and-contact-container">
                        <ImageDiv />
                        <ContactMeDiv />
                    </div>
                    <SocialsDiv />
                    <ResumeDiv data={personalInfo.info} />
                </article>
                <article className="about-myskills-certificates-data">
                    <div className="up-side">
                        <MySkillsDiv data={skillsData} />
                        <AboutDiv data={personalInfo.aboutMe} />
                    </div>
                    <div className="down-side">
                        <DatasDiv
                            awardData={awardData}
                            certificateData={certificateData}
                            experienceData={experienceData}
                            projectData={projectData}
                        />
                    </div>
                </article>
            </section>
        </section>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            awardData: awardsData,
            certificateData: certificatesData,
            experienceData: experiencesData,
            projectData: projectsData,
            personalInfo : personalInfoData,
            skillsData : skillsData
        },
    };
}