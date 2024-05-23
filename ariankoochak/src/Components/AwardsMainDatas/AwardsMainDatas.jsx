import React from 'react'
import AwardCard from '../AwardCard/AwardCard'
import iranOpenLogoSrc from '../../Assets/Images/IranOpenLogo.webp'
import rcapLogoSrc from "../../Assets/Images/RcapLogo.webp";
import robocup2016LogoSrc from "../../Assets/Images/RoboCup2016Logo.webp";
import robocup2017LogoSrc from "../../Assets/Images/RoboCup2017Logo.webp";
import salamLogoSrc from "../../Assets/Images/SalamLogo.webp";
import sampadLogoSrc from "../../Assets/Images/SampadLogo.webp";



export default function AwardsMainDatas() {
  return (
      <>
          <AwardCard
              title="3rd place in RoboCup Asia 2018(Co-Space Secondary)"
              issued="RoboCup Federation"
              issuedIconSrc={rcapLogoSrc}
              year="2018"
          />
          <div className="line"></div>
          <AwardCard
              title="4th place in RoboCup Iran Open 2018(Co-Space Secondary)"
              issued="Iranian RoboCup Federation"
              issuedIconSrc={iranOpenLogoSrc}
              year="2018"
          />
          <div className="line"></div>
          <AwardCard
              title="2nd place in Junior Cup 2018(Co-Space Secondary)"
              issued="National Organization of Exceptional Talents"
              issuedIconSrc={sampadLogoSrc}
              year="2018"
          />
          <div className="line"></div>
          <AwardCard
              title="5th place in RoboCup 2017 Nagoya Japan(Agent Simulation)"
              issued="RoboCup Federation"
              issuedIconSrc={robocup2017LogoSrc}
              year="2017"
          />
          <div className="line"></div>
          <AwardCard
              title="5th place in RoboCup Iran Open 2017(Co-Space Secondary)"
              issued="Iranian RoboCup Federation"
              issuedIconSrc={iranOpenLogoSrc}
              year="2017"
          />
          <div className="line"></div>
          <AwardCard
              title="3rd place in SalamCup 2017(Co-Space Secondary)"
              issued="Salam school complex"
              issuedIconSrc={salamLogoSrc}
              year="2017"
          />
          <div className="line"></div>
          <AwardCard
              title="Best Presentation in RoboCup 2016 Leipzig Germany(Co-Space Primary)"
              issued="RoboCup Federation"
              issuedIconSrc={robocup2016LogoSrc}
              year="2016"
          />
          <div className="line"></div>
          <AwardCard
              title="First place in Iran Open 2016(Co-Space Primary)"
              issued="Iranian RoboCup Federation"
              issuedIconSrc={iranOpenLogoSrc}
              year="2016"
          />
          <div className="line"></div>
          <AwardCard
              title="First place in SalamCup 2016(Co-Space Primary)"
              issued="Salam school complex"
              issuedIconSrc={salamLogoSrc}
              year="2016"
          />
      </>
  );
}
