import styled from "styled-components"

export const LandingOuter = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
  #particles {
    background: radial-gradient(
      rgba(183, 35, 14, 1) 0%,
      rgba(3, 3, 29, 1) 800px
    );
    @media only screen and (max-width: 950px) {
      background: radial-gradient(
        rgba(183, 35, 14, 1) 0%,
        rgba(3, 3, 29, 1) 70%
      );
    }
    @media only screen and (max-width: 500px) {
      background: radial-gradient(
        rgba(183, 35, 14, 1) 0%,
        rgba(3, 3, 29, 1) 90%
      );
    }
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export const RunesOuter = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 3rem 0rem;
  align-items: center;
  justify-content: center;
  > p {
    z-index: 50;
    font-size: 2.1rem;
    text-align: center;
    margin: 0 1.8rem 2rem;
    @media only screen and (max-width: 650px) {
      font-size: 1.8rem;
    }
  }
  > h1 {
    z-index: 50;
    font-size: 4.8rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-family: odile-upright-italic;
    font-weight: 800;
    animation: glow 6s ease-in-out infinite alternate;
    @keyframes glow {
      from {
        text-shadow: 1px 1px 10px rgba(183, 35, 14, 1),
          1px 1px 10px rgba(183, 35, 14, 1);
      }
      to {
        text-shadow: 1px 1px 20px rgba(183, 35, 14, 1),
          1px 1px 20px rgba(183, 35, 14, 1);
      }
    }
    letter-spacing: 0.35rem;
    @media only screen and (max-width: 650px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 500px) {
      text-align: center;
      line-height: 1;
    }
  }
`

export const RunesWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const Rune = styled.div`
  display: block;
  width: 100%;
  max-width: 300px;
  filter: brightness(0.1);
  @media only screen and (max-width: 500px) {
    filter: brightness(1);
  }
  margin: 1rem;
  transform: translateY(0px);
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: float 6s ease-in-out ${({ index }) => `${index}s`} infinite;
  transition: filter 0.3s ease-in-out;
  &:hover {
    animation-play-state: paused;
    filter: brightness(1);
    .text {
      opacity: 1;
    }
  }
`

export const RuneText = styled.div`
  opacity: 1;
  text-align: center;
  margin-top: 1.6rem;
  transition: opacity 0.3s ease-in-out;
  .rune-header {
    font-size: 2.5rem;
    font-weight: 400;
    color: hsla(28, 10%, 98%, 1);
    font-family: odile-upright-italic;
    font-weight: 800;
  }
`
