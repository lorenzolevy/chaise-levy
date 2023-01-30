import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledFooterLinkSection = styled.div`
  margin-bottom: 3.2rem;
  
  > p {
    font-family: "odile-upright-italic";
    font-size: 1.8rem;
    margin-bottom: 0;
    font-weight: 800;
    text-align: center;
    @media only screen and (max-width: 700px) {
      margin-bottom: 1rem;
    }
  }
  .icon.phone {
    font-size: 28px;
  }
  .icon.email {
    font-size: 36px;
  }
  .icon.patreon {
    font-size: 34px;
  }
  .icon {
    color: hsla(28, 10%, 98%, 1);
    transition: 350ms filter ease;
    font-size: 36px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.8rem;
    grid-gap: 12px;
    > a {
      cursor: pointer;
      &:hover {
        .icon {
          filter: drop-shadow(1px 1px 15px rgba(183, 35, 14, 1));
        }
      }
    }
  }
`

const FooterLinkSection = ({ icons }) => {
  return (
    <StyledFooterLinkSection>
      <p className="nav-header">Follow Me</p>
      <div>
        {icons.map(({href, icon, className}, index) => (
          <a href={href} key={`social ${index}`}>
            <FontAwesomeIcon
              icon={icon}
              size="1x"
              className={className}
              />
          </a>
        ))}
      </div>
    </StyledFooterLinkSection>
  )
}

export default FooterLinkSection
