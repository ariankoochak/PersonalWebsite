
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
const lewmarkLogoSrc = "/Images/LewmarkLogo.webp";
const ZistabLogoSrc = "/Images/ZistabLogo.webp";
const mosabpooyaLogoSrc = "/Images/MosabpooyaLogo.webp";

export default function ExperienceMainDatas() {
    return (
        <>
            <ExperienceCard
                title="Full-stack Developer"
                issued="mosab pooya Company"
                issuedIconSrc={mosabpooyaLogoSrc}
                date="april 2024-present"
                City="Iran-Tehran"
            />
            <div className="line"></div>
            <ExperienceCard
                title="IT manager"
                issued="Zistab Company"
                issuedIconSrc={ZistabLogoSrc}
                date="september 2022 - june 2023"
                City="Iran-Tehran"
            />
            <div className="line"></div>
            <ExperienceCard
                title="Front-End Developer(Remote) with React JS & React Native"
                issued="Lewmark Company"
                issuedIconSrc={lewmarkLogoSrc}
                date="july 2020 - september 2020"
                City="England-manchester"
            />
        </>
    );
}