import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

const StyledSocials = styled.div`
  margin-bottom: 3.2rem;
  
  > p {
    font-family: "odile-upright-italic";
    font-size: 1.8rem;
    margin-bottom: 0;
    font-weight: 800;
    text-align: center;
    @media only screen and (max-width: 700px) {
      margin-bottom: 31px;
    }
  }
  .icon {
    color: hsla(28, 10%, 98%, 1);
    transition: 350ms filter ease;
    font-size: 45px;
  }
  .linkedin {
    margin: 0 12px 0 0;
  }
  .insta {
    margin: 0 0 0 12px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.8rem;
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

const Socials = () => {
  return (
    <StyledSocials>
      <p className="nav-header">Follow Me</p>
      <div>
        <a href="https://www.linkedin.com/in/chaise-levy-a55242175/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="1x"
            className="icon linkedin"
          />
        </a>
        <a href="https://instagram.com/mouthisameadhall?utm_medium=copy_link">
          <FontAwesomeIcon
            icon={faInstagram}
            size="1x"
            className="icon insta"
          />
        </a>
      </div>
    </StyledSocials>
  )
}

export default Socials
