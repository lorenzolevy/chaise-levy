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
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export const RunesOuter = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  align-items: center;
  justify-content: center;
  > h1 {
    z-index: 50;

    font-size: 90px;
    margin-top: 4.5rem;
    margin-bottom: 4.75rem;
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
    font-weight: 400;
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
  filter: brightness(
    ${({ theme }) => (theme.breakpoints.supportsTouch ? ".8" : "0.1")}
  );

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
    font-size: 40px;
    font-weight: 400;
    color: hsla(28, 10%, 98%, 1);
  }
`
