import React from 'react'

export default function CertificateCard({ title, institute, instituteIconSrc, techs, year }) {

    return (
        <div className="certificate-card">
            <div className="institute-image">
                <img src={instituteIconSrc} alt={`${institute}`} />
            </div>
            <div className="certificate-datas">
                <div className="left-side">
                    <span className="margin-down">{title}</span>
                    <span>{institute}</span>
                </div>
                <div className="right-side">
                    <span className="margin-down">{year}</span>
                    <span>{techs}</span>
                </div>
            </div>
        </div>
    );
}
