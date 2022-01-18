import React from 'react'
import { Container, Fold, Title, Description, Pricing } from './Trifold.styles'

const Trifold = ({ trifold }) => {
  return (
    <Container>
      {trifold.map((fold) => (
        <Fold key={fold.title}>
          <Title>
            {fold.title}
          </Title>
          <Description>
            {fold.description}
          </Description>
          <Pricing>
            {fold.pricing}
          </Pricing>
        </Fold>
      ))}
    </Container>
  )
}

export default Trifold
