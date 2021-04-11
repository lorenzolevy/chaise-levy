import React from "react"

import { FooterWrapper, Legal, Row } from "./Footer.styles"
import { ContactInfo, Socials, GlobalNav } from "../../primitives/Links"

const Footer = () => {
  return (
    <FooterWrapper>
      <Row>
        <ContactInfo />
        <GlobalNav />
        <Socials />
      </Row>

      <Legal>
        Wizards of the Coast, Dungeons & Dragons, and their logos are trademarks
        of Wizards of the Coast LLC in the United States and other countries. ©
        2019 Wizards. All Rights Reserved. This web site is not affiliated with,
        endorsed, sponsored, or specifically approved by Wizards of the Coast
        LLC. This web site may use the trademarks and other intellectual
        property of Wizards of the Coast LLC, which is permitted under Wizards’
        Fan Site Policy. For example, Dungeons & Dragons® is a trademark[s] of
        Wizards of the Coast. For more information about Wizards of the Coast or
        any of Wizards’ trademarks or other intellectual property, please visit
        their website at (www.wizards.com).
      </Legal>
    </FooterWrapper>
  )
}

export default Footer
