import styled from 'styled-components'
import Stars from '../../assets/stars-texture.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 4rem;
  font-family: odile-upright-italic;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: .4rem;
  margin-top: 2.4rem;
  margin-bottom: 1rem;
  &:before {
    content: "U";
    font-family: odile-ornaments;
    font-size: 4rem;
    display: inline-block;
    margin-right: ${({ ornamentSpace }) => ornamentSpace ? '1.6rem' : 0};
  }
  &:after {
    content: "U";
    font-family: odile-ornaments;
    display: inline-block;
    transform: rotate(45deg);
    font-size: 4rem;
  }
  span.fancy-char {
    font-family: odile-deco-initials;
    display: inline-block;
    &:last-child {
      margin-left: ${({ middleSpace }) => middleSpace ? middleSpace : '1.6rem'};
    }
  }
  @media only screen and (max-width: 850px) {
    font-size: 2.4rem;
    &:before {
      font-size: 2.4rem;
      margin-right: ${({ mobileOrnamentSpace }) => mobileOrnamentSpace ? mobileOrnamentSpace : '1rem'};
    }
    &:after {
      font-size: 2.4rem;
    }
  }
  ${({ longText }) => longText && `
    @media only screen and (max-width: 550px) {
      font-size: 1.9rem;
      &:before {
        font-size: 1.9rem;
      }
      &:after {
        font-size: 1.9rem;
      }
  `}
`

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-family: "Francois One";
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    height: 100%;
    width: 100%;
    max-width: 200px;
    max-height: 60px;
    &:first-child {
      margin-right: 1.1rem;
    }
    &:last-child {
      margin-left: 1.1rem;
    }
    @media only screen and (max-width: 500px) {
        max-width: 160px;
    }
  }
`

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 2;
  &:after {
    position: absolute;
    content: "";
    background: url(${Stars});
    background-repeat: repeat;
    background-size: 1200px;
    width: 100%;
    height: 150%;
    z-index: -1;
    opacity: .5;
  }
`