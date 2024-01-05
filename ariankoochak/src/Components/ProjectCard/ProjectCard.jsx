import React from 'react'
import { useSelector } from 'react-redux';

export default function ProjectCard({ title, iconSrc, Techs, live ,mainLink}) {
    const mainColor = useSelector((store) => store.colorSlice.mainColor);
    const handleProjectImage = ()=>{
        if(iconSrc === 'github')
            return <i className="fa-brands fa-github"></i>;
        return <img src={iconSrc} alt={`${title}`} />;
    }
    const handleLiveProject = ()=>{
        if(live !== '')
            return <a href={live} className={`${mainColor.color}`} target="_blank" rel="noreferrer">Go Live</a>
    }
    const handleSeeProject=()=>{
        if(mainLink !== '')
            return <a href={mainLink} className={`${mainColor.color}`} target="_blank" rel="noreferrer">See code on github</a>
        
    }
    return (
        <div className="certificate-card">
            <div className="institute-image">
               {handleProjectImage()}
            </div>
            <div className="certificate-datas">
                <div className="left-side">
                    <span className="margin-down">{title}</span>
                    <span>{Techs}</span>
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
