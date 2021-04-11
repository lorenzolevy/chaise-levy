import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: #03031d;
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  flex-wrap: wrap;
  > * {
    margin: 1.8rem 2.4rem 0.6rem;
    @media only screen and (max-width: 700px) {
      min-width: 100%;
      margin: 2.2rem 2.6rem 1.2rem;
    }
  }

  .icon {
    color: hsla(28, 10%, 98%, 1);
    transition: 350ms filter ease;
    cursor: pointer;
  }
  padding: 1rem 0;
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`

export const Legal = styled.p`
  font-family: "Source Sans Pro";
  font-size: 0.9rem;
  line-height: 1.3;
  margin: 0 1.8rem;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:before {
    content: "";
    width: 100%;
    height: 2px;
    margin-bottom: 0.8rem;
    background-color: rgba(183, 35, 14, 1);
    display: block;
  }
`

export const Socials = styled.div`
  > p {
    font-family: "Norse Bold";
    font-size: 1.8rem;
    margin-bottom: 0;
    text-align: center;
  }
  .icon {
    color: hsla(28, 10%, 98%, 1);
    transition: 350ms filter ease;
    font-size: 34px;
  }
  .linkedin {
    margin: 0 8px 0 0;
  }
  .insta {
    margin: 0 0 0 8px;
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
