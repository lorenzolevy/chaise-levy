import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"

const StyledSocials = styled.div`
  margin-bottom: 3.2rem;
  cursor: pointer;
  > p {
    font-family: "Norse Bold";
    font-size: 1.8rem;
    margin-bottom: 0;
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
        <a>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="1x"
            className="icon linkedin"
          />
        </a>
        <a>
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
