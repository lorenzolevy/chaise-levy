import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Fold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 340px;
  width: 100%;
  background-color: rgb(51, 51, 51);
  padding: 1.6875rem 1rem;
  border: 3px solid #E0851E;
`

export const Title = styled.p`
  font-family: odile-upright-italic;
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
`

export const Description = styled.p`
  margin-bottom: 1rem;
`
export const Pricing = styled.p`
  margin-bottom: 0;
`