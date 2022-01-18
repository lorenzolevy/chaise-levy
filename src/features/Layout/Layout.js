import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Main } from "./Layout.styles"

const Layout = ({ landing, children }) => {
  return (
    <Fragment>
      <Navbar />
      <Main>
        <div className="logo-container">
          <Link to="/">
            <StaticImage src="../../images/logo.png" alt="Chaise Levy logo and link to home" width={300} />
          </Link>
        </div>
        {children}
      </Main>
      <Footer />
    </Fragment>
  )
}

Layout.defaultProps = {
  landing: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  landing: PropTypes.bool,
}

export default Layout
