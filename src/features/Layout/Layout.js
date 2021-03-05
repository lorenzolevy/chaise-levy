import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar"

const Layout = ({ landing, children }) => {
  return (
    <Fragment>
      {!landing && <Navbar />}
      <main>{children}</main>
      <footer
        style={{
          backgroundColor: "#03031d",
        }}
      >
        footer
      </footer>
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
