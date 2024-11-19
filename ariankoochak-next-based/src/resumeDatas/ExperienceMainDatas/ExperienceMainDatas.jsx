
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";


export default function ExperienceMainDatas({data}) {
    return (
        <>
            {data.map((experience, index) => {
                return (
                    <>
                        <ExperienceCard
                            key={experience.title}
                            title={experience.title}
                            issued={experience.issued}
                            issuedIconSrc={experience.issuedIconSrc}
                            date={experience.date}
                            city={experience.city}
                        />
                        {!(index + 1 === data.length) && (
                            <div className="line"></div>
                        )}
                    </>
                );
            })}
        </>
    );
}