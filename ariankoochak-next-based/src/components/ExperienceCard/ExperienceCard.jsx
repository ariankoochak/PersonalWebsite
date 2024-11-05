import React from "react";

export default function ExperienceCard({
    title,
    issued,
    issuedIconSrc,
    date,
    City,
}) {
    return (
        <div className="certificate-card">
            <div className="institute-image">
                <img loading="lazy" src={issuedIconSrc} alt={`${issued}`} />
            </div>
            <div className="certificate-datas">
                <div className="left-side">
                    <span className="margin-down">{title}</span>
                    <span>{issued}</span>
                </div>
                <div className="right-side">
                    <span className="margin-down">{date}</span>
                    <span>{City}</span>
                </div>
            </div>
        </div>
    );
}