import React from "react";

export default function ResumeDiv() {
    return (
        <div
            className={`common-styles-div resume-div persian-blue-div-color`}
        >
            <h2 className={`divs-title persian-blue-color`}>Resume</h2>
            <div className="resume-data">
                <div className="age">
                    <span className="title">Age</span>
                    <span className="value">21 Years</span>
                </div>
                <div className="city">
                    <span className="title">Address</span>
                    <span className="value">Tehran, Iran</span>
                </div>
                <div className="military">
                    <span className="title">Military service status</span>
                    <span className="value">Education pardon</span>
                </div>
                <div className="email">
                    <span className="title">Email</span>
                    <span className="value">arian.koochak@protonmail.com</span>
                </div>
                <div className="education">
                    <span className="title">Degree of Education</span>
                    <span className="value">
                        Bachelor of Computer Engineering <br /> University of
                        Research Sciences
                    </span>
                </div>
            </div>
        </div>
    );
}