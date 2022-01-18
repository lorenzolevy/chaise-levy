import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export const StyledContacts = styled.div`
  margin-bottom: 3.2rem;
  text-align: center;
  box-sizing: border-box;
  > p {
    font-family: "odile-upright-italic";
    font-size: 1.8rem;
    margin-bottom: 0;
    font-weight: 800;
    margin-bottom: 0;
    @media only screen and (max-width: 700px) {
      margin-bottom: 31px;
    }
  }
  .icon {
    color: white;
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

    .phone {
      margin: 0 12px 0 0;
      font-size: 38px;
    }
    .email {
      font-size: 42px;
      margin: 0 0 0 12px;
    }
  }
`

const ContactInfo = () => {
  return (
    <StyledContacts>
      <p className="nav-header">Contact Me</p>
      <div>
        <a href="tel:310-710-5223">
          <FontAwesomeIcon icon={faPhoneAlt} size="1x" className="icon phone" />
        </a>
        <a href="mailto:chaiselevy@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="1x" className="icon email" />
        </a>
      </div>
    </StyledContacts>
  )
}

export default ContactInfo
