import React from "react"
import styled from "styled-components"

const ButtonWrapper = styled.div`
  width: 36px;
  display: none;
  height: 40px;
  cursor: pointer;
  padding: 0.8rem;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    display: flex;
    position: fixed;
    width: 24px;
    top: 26px;
    right: 26px;
    &:hover {
      .line {
        box-shadow: 1px 1px 0px 0px rgba(183, 35, 14, 1);
      }
    }
  }

  .line {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? `top: 12x; width: 0%; left: 50%;` : "top: 0px;"}
    }
    &:nth-child(2) {
      ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? `transform: rotate(45deg)` : ""};
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 12px;
    }
    &:nth-child(3) {
      ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? `transform: rotate(-45deg)` : ""};
    }
    &:nth-child(4) {
      ${({ isMobileNavOpen }) =>
        isMobileNavOpen ? `top: 12px; width: 0%; left: 50%;` : "top: 24px;"}
    }
  }
`

const MobileMenuButton = ({ setMobileNavOpen, isMobileNavOpen }) => {
  return (
    <ButtonWrapper isMobileNavOpen={isMobileNavOpen} onClick={setMobileNavOpen}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </ButtonWrapper>
  )
}

export default MobileMenuButton
