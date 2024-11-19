import AboutDiv from "@/layouts/AboutDiv/AboutDiv";
import ColorChanger from "@/layouts/ColorChanger/ColorChanger";
import ContactMeDiv from "@/layouts/ContactMeDiv/ContactMeDiv";
import DatasDiv from "@/layouts/DatasDiv/DatasDiv";
import ImageDiv from "@/layouts/ImageDiv/ImageDiv";
import MySkillsDiv from "@/layouts/MySkillsDiv/MySkillsDiv";
import ResumeDiv from "@/layouts/ResumeDiv/ResumeDiv";
import SocialsDiv from "@/layouts/SocialsDiv/SocialsDiv";
import TitleDiv from "@/layouts/TitleDiv/TitleDiv";

const iranOpenLogoSrc = "/Images/IranOpenLogo.webp";
const rcapLogoSrc = "/Images/RcapLogo.webp";
const robocup2016LogoSrc = "/Images/RoboCup2016Logo.webp";
const robocup2017LogoSrc = "/Images/RoboCup2017Logo.webp";
const salamLogoSrc = "/Images/SalamLogo.webp";
const sampadLogoSrc = "/Images/SampadLogo.webp";

const mtfLogoSrc = "/Images/MftLogo.webp";
const sharifLogoSrc = "/Images/SharifLogo.webp";
const rahsaLogoSrc = "/Images/RahsaLogo.webp";
const queraLogoSrc = "/Images/queraLogoForCertificate.webp";

export default function HomePage({ awardData, certificateData }) {
    console.log(awardData);
    return (
        <section className="main">
            <section className="container">
                <ColorChanger />
                <article className="contact-and-me-data">
                    <TitleDiv />
                    <div className="image-and-contact-container">
                        <ImageDiv />
                        <ContactMeDiv />
                    </div>
                    <SocialsDiv />
                    <ResumeDiv />
                </article>
                <article className="about-myskills-certificates-data">
                    <div className="up-side">
                        <MySkillsDiv />
                        <AboutDiv />
                    </div>
                    <div className="down-side">
                        {console.log(awardData)}
                        <DatasDiv
                            awardData={awardData}
                            certificateData={certificateData}
                        />
                    </div>
                </article>
            </section>
        </section>
    );
}

export async function getServerSideProps() {
    return {
        props: {
            awardData: [
                {
                    title: "3rd place in RoboCup Asia 2018(Co-Space Secondary)",
                    issued: "RoboCup Federation",
                    issuedIconSrc: rcapLogoSrc,
                    year: "2018",
                },
                {
                    title: "2nd place in Junior Cup 2018(Co-Space Secondary)",
                    issued: "National Organization of Exceptional Talents",
                    issuedIconSrc: sampadLogoSrc,
                    year: "2018",
                },
                {
                    title: "5th place in RoboCup 2017 Nagoya Japan(Agent Simulation)",
                    issued: "RoboCup Federation",
                    issuedIconSrc: robocup2017LogoSrc,
                    year: "2017",
                },
                {
                    title: "3rd place in SalamCup 2017(Co-Space Secondary)",
                    issued: "Salam school complex",
                    issuedIconSrc: salamLogoSrc,
                    year: "2017",
                },
                {
                    title: "Best Presentation in RoboCup 2016 Leipzig Germany(Co-Space Primary)",
                    issued: "RoboCup Federation",
                    issuedIconSrc: robocup2016LogoSrc,
                    year: "2016",
                },
                {
                    title: "First place in Iran Open 2016(Co-Space Primary)",
                    issued: "Iranian RoboCup Federation",
                    issuedIconSrc: iranOpenLogoSrc,
                    year: "2016",
                },
                {
                    title: "First place in SalamCup 2016(Co-Space Primary)",
                    issued: "Salam school complex",
                    issuedIconSrc: salamLogoSrc,
                    year: "2016",
                },
            ],
            certificateData: [
                {
                    title: "No-SQL Databases",
                    institute: "Quera",
                    instituteIconSrc: queraLogoSrc,
                    techs: "Redis/MongoDb/Neo4j/Cassandra/ElasticSearch",
                    year: "2024",
                },
                {
                    title: "Node JS",
                    institute: "Tehran Institute of Technology",
                    instituteIconSrc: mtfLogoSrc,
                    techs: "Node/mongoDB/Redis",
                    year: "2024",
                },
                {
                    title: "React JS",
                    institute: "Sharif University of Technology",
                    instituteIconSrc: sharifLogoSrc,
                    techs: "React/Redux",
                    year: "2023",
                },
                {
                    title: "React JS",
                    institute: "Tehran Institute of Technology",
                    instituteIconSrc: mtfLogoSrc,
                    techs: "React/NextJS/Redux",
                    year: "2023",
                },
                {
                    title: "JavaScript & Ajax & jQuery",
                    institute: "Tehran Institute of Technology",
                    instituteIconSrc: mtfLogoSrc,
                    techs: "JavaScript/Ajax/jQuery",
                    year: "2023",
                },
                {
                    title: "HTML & CSS",
                    institute: "Tehran Institute of Technology",
                    instituteIconSrc: mtfLogoSrc,
                    techs: "HTML/CSS",
                    year: "2023",
                },
                {
                    title: "SQL Server",
                    institute: "Tehran Institute of Technology",
                    instituteIconSrc: mtfLogoSrc,
                    techs: "Database/T-Sql/Sql server",
                    year: "2023",
                },
                {
                    title: "Python",
                    institute: "Tehran Institute of Technology",
                    instituteIconSrc: mtfLogoSrc,
                    techs: "Python",
                    year: "2023",
                },
                {
                    title: "Introduction to machine learning",
                    institute: "Rahsa Educational Industrial Group",
                    instituteIconSrc: rahsaLogoSrc,
                    techs: "Python/AI",
                    year: "2023",
                },
            ],
        },
    };
}