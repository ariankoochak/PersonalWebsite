import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import myLogoSrc from '../../Assets/Images/MyLogo.webp'
export default function ProjectsMainDatas() {
  return (
      <>
          <ProjectCard
              title="Personal Website(This Website)"
              Techs="ReactJs/NodeJS/Redux"
              live="https://ariankoochak.com"
              iconSrc={myLogoSrc}
              mainLink="https://github.com/ariankoochak/PersonalWebsite"
          />
          <div className="line"></div>
          <ProjectCard
              title="Todo List"
              Techs="ReactJs/Redux"
              live="https://ariankoochak.github.io/todoMVC/"
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/todoMVC"
          />
          <div className="line"></div>
          <ProjectCard
              title="Ping Pong JS"
              Techs="JavaScript"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/pingPongJs"
          />
          <div className="line"></div>
          <ProjectCard
              title="CV-Project"
              Techs="ReactJs/Redux"
              live="https://ariankoochak.github.io/CV-Project/"
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/CV-Project"
          />
          <div className="line"></div>
          <ProjectCard
              title="Clock factory ticket-service"
              Techs="ReactJs/Redux/ExpressJs/MongoDB"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/ClockService"
          />
          <div className="line"></div>
          <ProjectCard
              title="Dijkstra"
              Techs="C++"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/Dijkstra"
          />
          <div className="line"></div>
          <ProjectCard
              title="A-Star"
              Techs="C++"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/A-star"
          />
          <div className="line"></div>
          <ProjectCard
              title="JS-Lab"
              Techs="Javascript/MySql"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/js-Lab"
          />
          <div className="line"></div>
          <ProjectCard
              title="ReactJS-Lab"
              Techs="ReactJS/NextJS/redux"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/reactjs-Lab"
          />
          <div className="line"></div>
          <ProjectCard
              title="Sql-Lab"
              Techs="ReactJS/NextJS/redux"
              live=""
              iconSrc="github"
              mainLink="https://github.com/ariankoochak/sql-Lab"
          />
      </>
  );
}
