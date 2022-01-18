import styled from "styled-components"

export const NavWrapper = styled.nav`
  background-color: #03031d;
  z-index: 100;
  height: 72px;
  .logo-container {
    padding-left: 1rem;
    max-width: 300px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 900px) {
    position: fixed;
    transition: right 350ms ease-in;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: ${({ isMobileNavOpen }) => (isMobileNavOpen ? "0" : "-100vw")};
  }
`
export const NavItems = styled.div`
  display: flex;
  margin-right: 1.8rem;
  height: 100%;
  align-items: center;
  justify-content: center;
  .menu-item-text {
    margin-bottom: 0;
    line-height: 1;
    font-size: 20px;
    font-family: "Francois One";
    transition: 350ms all ease;
    padding: 2px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  > a {
    @media only screen and (max-width: 900px) {
      margin-left: 0;
      margin: 1.2rem 0;
      .menu-item-text {
        font-size: 24px;
      }
    }
    &:hover {
      .menu-item-text {
        text-shadow: 1px 1px 20px rgba(255, 0, 51, 1);
      }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 28px;
    color: hsla(28, 10%, 98%, 1);
    justify-content: center;
    padding: 4px;
  }

  @media only screen and (max-width: 900px) {
    display: block;
    height: auto;
    position: relative;
    margin-right: 0;
    margin-bottom: 3.2rem;
  }
`
