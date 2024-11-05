import React from "react";
export default function SocialsDiv() {
    return (
        <div className={`common-styles-div socials-div persian-blue-div-color`}>
            <a
                href="https://www.instagram.com/ariankoochak/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="instagram">
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </a>

            <a
                href="https://www.linkedin.com/in/arian-koochak-281b36240/"
                target="_blank"
                rel="noreferrer"
            >
                <div className="linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
            </a>

            <a
                href="https://github.com/ariankoochak"
                target="_blank"
                rel="noreferrer"
            >
                <div className="github">
                    <i className="fa-brands fa-github"></i>
                </div>
            </a>
            <a
                href="https://quera.org/profile/DULDQ"
                target="_blank"
                rel="noreferrer"
            >
                <div className="quera">
                    <img loading="lazy" src={'/Images/QueraLogo.webp'} alt="quera" />
                </div>
            </a>
        </div>
    );
}