
export default function ContactMeDiv() {
    const handleContactMeClick = () => {
        window.open("mailto:arian.koochak@protonmail.com");
    };
    return (
        <div className={`common-styles-div contact-div persian-blue-div-color`}>
            <div className="contact-container">
                <span>I’m available for work</span>
                <button
                    className="contact-me-btn"
                    onClick={handleContactMeClick}
                >
                    <i className="fa-solid fa-circle"></i> Contact me
                </button>
                <a href="/CV.pdf" download>
                    <button
                        className={`download-cv-btn persian-blue-Backgroundcolor`}
                    >
                        <i className="fa-solid fa-download"></i> Download CV
                    </button>
                </a>
            </div>
        </div>
    );
}
