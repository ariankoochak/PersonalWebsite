import React from 'react'
import styled from 'styled-components'
export default function SkillTag(props) {
    const SkillTagSpan = styled.span`
        &:before {
            content: "";
            background-image: url(${props.skillIconSrc});
            background-position: center;
            background-size: cover;
            display: inline-block;
            width: 18px;
            height: 18px;
            position: relative;
            top: 2px;
            margin-right: 4px;
        }
    `;
  return <SkillTagSpan className="skill-tag">{props.skillName}</SkillTagSpan>;
}
