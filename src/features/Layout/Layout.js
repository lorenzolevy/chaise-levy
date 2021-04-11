import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ landing, children }) => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
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
