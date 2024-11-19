import React from "react";
import AwardCard from "../../components/AwardCard/AwardCard";

export default function AwardsMainDatas({data}) {
    return (
        <>
        {data.map((award,index)=>{
            return <>
                <AwardCard key={award.title} title ={award.title} issued={award.issued} issuedIconSrc={award.issuedIconSrc} year={award.year}/>
                {!(index+1 === data.length) && <div className="line"></div>}
            </>
        })}
        </>
    );
}

