import React from "react";
import TitleDiv from "../../Components/TitleDiv/TitleDiv";
import ImageDiv from "../../Components/ImageDiv/ImageDiv";
import ContactMeDiv from "../../Components/ContactMeDiv/ContactMeDiv";
import SocialsDiv from "../../Components/SocialsDiv/SocialsDiv";


export default function HomePage() {
    return (
        <>
            <section className="container">
              <article className="contact-and-me-data">
                    <TitleDiv/>
                    <div className="image-and-contact-container">
                        <ImageDiv/>
                        <ContactMeDiv/>
                    </div>
                    <SocialsDiv/>
              </article>
              <article className="about-myskills-certificates-data">

              </article>
            </section>
        </>
    );
}
