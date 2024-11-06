import Image from "next/image";
import React from "react";

export default function ProjectCard({ title, iconSrc, Techs, live, mainLink }) {
    const handleProjectImage = () => {
        if (iconSrc === "github")
            return <i className="fa-brands fa-github"></i>;
        return <Image src={iconSrc} alt={`${title}`} fill/>;
    };
    const handleLiveProject = () => {
        if (live !== "")
            return (
                <a
                    href={live}
                    className={`persian-blue-color`}
                    target="_blank"
                    rel="noreferrer"
                >
                    Go Live
                </a>
            );
    };
    const handleSeeProject = () => {
        if (mainLink !== "")
            return (
                <a
                    href={mainLink}
                    className={`persian-blue-color`}
                    target="_blank"
                    rel="noreferrer"
                >
                    See code on github
                </a>
            );
    };
    const marginDownObject = {
        marginBottom: "4px",
    };
    return (
        <div className="certificate-card">
            <div className="institute-image">{handleProjectImage()}</div>
            <div className="certificate-datas">
                <div className="left-side">
                    <span className="margin-down">{title}</span>
                    <span style={marginDownObject}>{Techs}</span>
                </div>
                <div className="right-side">
                    {handleLiveProject()}
                    <br />
                    <br />
                    {handleSeeProject()}
                </div>
            </div>
        </div>
    );
}
