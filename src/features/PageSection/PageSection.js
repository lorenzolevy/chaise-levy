import React from 'react'
import Plaque from '../../primitives/Plaque'
import TitlePlaque from '../../primitives/TitlePlaque'
import Trifold from '../Trifold'

import { Section, Paragraphs, Paragraph, Pricing, Bullets } from './PageSection.styles'


const PageSection = ({ heading, paragraphs, cta, bullets, trifoldSection }) => {
  return (
    <Section id="first-section">
      <TitlePlaque className="plaque-title" text={heading}/>
      <Paragraphs>
        {paragraphs && paragraphs.map((paragraph) => (
          <Paragraph>
            {paragraph}
          </Paragraph>
        ))}
      </Paragraphs>
      {!!bullets && (
        <Bullets>
          {bullets.length > 0 && bullets.map((bullet) => (
            <li>{bullet}</li>
          ))}
        </Bullets>
      )}
      
      {cta && cta.pricing && 
        <Pricing>
          {cta.pricing}
        </Pricing>
      }
      {!!trifoldSection &&
        <Trifold trifold={trifoldSection} />
      }
      {cta && 
        <div>
          <a href="mailto:chaiselevy@gmail.com">
            <Plaque className="plaque-cta" text={cta.text} />
          </a>
        </div>
      }
    </Section>
  )
}

export default PageSection
