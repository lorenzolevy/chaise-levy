import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export const StyledContacts = styled.div`
  text-align: center;
  > p {
    font-family: "Norse Bold";
    font-size: 1.8rem;
    margin-bottom: 0;
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

    .email {
      margin: 0 8px 0 0;
      font-size: 32px;
    }
    .phone {
      font-size: 34px;
      margin: 0 0 0 8px;
    }
  }
`

const ContactInfo = () => {
  return (
    <StyledContacts>
      <p>Contact Me</p>
      <div>
        <a href="tel:310-710-5223">
          <FontAwesomeIcon icon={faPhoneAlt} size="1x" className="icon email" />
        </a>
        <a href="mailto:chaiselevy@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="1x" className="icon phone" />
        </a>
      </div>
    </StyledContacts>
  )
}

export default ContactInfo
