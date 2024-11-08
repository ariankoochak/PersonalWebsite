
import TitleDiv from "../../Components/TitleDiv/TitleDiv";
import ImageDiv from "../../Components/ImageDiv/ImageDiv";
import ContactMeDiv from "../../Components/ContactMeDiv/ContactMeDiv";
import SocialsDiv from "../../Components/SocialsDiv/SocialsDiv";
import ResumeDiv from "../../Components/ResumeDiv/ResumeDiv";
import MySkillsDiv from "../../Components/MySkillsDiv/MySkillsDiv";
import AboutDiv from "../../Components/AboutDiv/AboutDiv";
import DatasDiv from "../../Components/DatasDiv/DatasDiv";
import ColorChanger from "../../Components/ColorChanger/ColorChanger";


export default function HomePage() {
    return (
        <>
            <section className="main">
                <section className="container">
                    <ColorChanger/>
                    <article className="contact-and-me-data">
                        <TitleDiv />
                        <div className="image-and-contact-container">
                            <ImageDiv />
                            <ContactMeDiv />
                        </div>
                        <SocialsDiv />
                        <ResumeDiv/>
                    </article>
                    <article className="about-myskills-certificates-data">
                        <div className="up-side">
                            <MySkillsDiv/>
                            <AboutDiv/>
                        </div>
                        <div className="down-side">
                            <DatasDiv/>
                        </div>
                    </article>
                </section>
            </section>
        </>
    );
}
