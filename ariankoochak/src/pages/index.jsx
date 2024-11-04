import ColorChanger from "@/components/ColorChanger/ColorChanger";
import ContactMeDiv from "@/components/ContactMeDiv/ContactMeDiv";
import ImageDiv from "@/components/ImageDiv/ImageDiv";
import TitleDiv from "@/components/TitleDiv/TitleDiv";

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
                  {/* <SocialsDiv />
                  <ResumeDiv />
              </article>
              <article className="about-myskills-certificates-data">
                  <div className="up-side">
                      <MySkillsDiv />
                      <AboutDiv />
                  </div>
                  <div className="down-side">
                      <DatasDiv />
                  </div> */}
              </article>
          </section>
      </section>
  );
}
