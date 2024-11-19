
import ProjectCard from "../../components/ProjectCard/ProjectCard";


export default function ProjectsMainDatas({data}) {
    return (
        <>
            {data.map((project, index) => {
                return (
                    <>
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            techs={project.techs}
                            live={project.live}
                            iconSrc={project.iconSrc}
                            mainLink={project.mainLink}
                        />
                        {!(index + 1 === data.length) && (
                            <div className="line"></div>
                        )}
                    </>
                );
            })}
        </>
    );}
