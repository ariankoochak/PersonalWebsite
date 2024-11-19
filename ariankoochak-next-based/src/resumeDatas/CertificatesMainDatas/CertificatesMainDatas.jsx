
import CertificateCard from "../../components/CertificateCard/CertificateCard";


export default function CertificatesMainDatas({data}) {
    return (
        <>
            {data.map((certificate, index) => {
                return (
                    <>
                        <CertificateCard
                            key={certificate.title}
                            title={certificate.title}
                            institute={certificate.institute}
                            instituteIconSrc={certificate.instituteIconSrc}
                            techs={certificate.techs}
                            year={certificate.year}
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
