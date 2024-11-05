import AboutDiv from "@/layouts/AboutDiv/AboutDiv";
import ColorChanger from "@/layouts/ColorChanger/ColorChanger";
import ContactMeDiv from "@/layouts/ContactMeDiv/ContactMeDiv";
import DatasDiv from "@/layouts/DatasDiv/DatasDiv";
import ImageDiv from "@/layouts/ImageDiv/ImageDiv";
import MySkillsDiv from "@/layouts/MySkillsDiv/MySkillsDiv";
import ResumeDiv from "@/layouts/ResumeDiv/ResumeDiv";
import SocialsDiv from "@/layouts/SocialsDiv/SocialsDiv";
import TitleDiv from "@/layouts/TitleDiv/TitleDiv";

export default function HomePage() {
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
                  <ResumeDiv />
              </article>
              <article className="about-myskills-certificates-data">
                  <div className="up-side">
                      <MySkillsDiv />
                      <AboutDiv />
                  </div>
                  <div className="down-side">
                      <DatasDiv />
                  </div>
              </article>
          </section>
      </section>
  );
}
