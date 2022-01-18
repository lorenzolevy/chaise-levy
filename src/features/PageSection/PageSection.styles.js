import styled from 'styled-components'
import Stars from '../../assets/stars-texture.svg'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .plaque-title {
    width: 100%;
    max-width: 601px;
  }
  .plaque-cta {
    width: 100%;
    max-width: 200px;
  } 
  padding: 3rem 1rem;
  border-top: 5px solid #E0851E;
  font-size: 1.2rem;
  position: relative;
  z-index: 2;
  &:before {
    position: absolute;
    content: "";
    margin-top: -3rem;
    background: url(${Stars});
    background-repeat: repeat;
    background-size: 1200px;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .3;
  }
`

export const Paragraph = styled.p`
  line-height: 1.6;
  &:last-child {
    margin-bottom: 0;
  }
`

export const Paragraphs = styled.div`
  max-width: 1080px;
  margin: 3rem 0rem;
`

export const Pricing = styled.p`
  font-size: 1.6rem;
`

export const Bullets = styled.ul`
  list-style: inherit;
  margin-bottom: 2.4rem;
`