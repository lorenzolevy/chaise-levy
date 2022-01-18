import React from 'react'
import { Fragment } from 'react';
import Plaque from '../../primitives/Plaque'

import { Container, LinksContainer, SubHeading, Title, StarsContainer } from './PageHeader.styles'
import FluidImage from '../FluidImage';

const PageHeader = ({ title, subHeading, ornamentSpace, mobileOrnamentSpace, middleSpace, links, hero, longText }) => {
  const titleTexts = title.split(' ');
  return (
    <Container>
      <StarsContainer>
        <Title ornamentSpace={ornamentSpace} middleSpace={middleSpace} mobileOrnamentSpace={mobileOrnamentSpace} longText={longText}>
          {!!titleTexts && titleTexts.map((text, i) => (
            <Fragment key={`heading-text-${i}`}>
              <span className="fancy-char">
                {text[0]}
              </span>
              {text.substr(1)}
            </Fragment>
          ))}
        </Title>
        {!!subHeading && <SubHeading>
          {subHeading}
        </SubHeading>}
        <LinksContainer>  
          {!!links && links.length > 0 && links.map((link)=>(
            <div key={link.text}>
              <a href={link.to}>
                <Plaque text={link.text} />
              </a>
            </div>
          ))}
        </LinksContainer>
      </StarsContainer>
      <FluidImage fluid={hero} maxWidth={1800} />
    </Container>
  )
}

export default PageHeader
