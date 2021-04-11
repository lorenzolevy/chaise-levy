import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { withTheme } from "styled-components"

import MobileMenuButton from "./primitives/MobileMenuButton"

import { NavWrapper, NavItems } from "./Navbar.styles"
import theme from "../../themes/theme"

const navLinks = [
  {
    to: "/dungeon-master",
    text: "Dungeon Master",
  },
  {
    to: "/storyteller",
    text: "Storyteller",
  },
  {
    to: "/rune-reader",
    text: "Rune Reader",
  },
]

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    })

    useEffect(() => {
      if (typeof window != undefined) {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => window.removeEventListener("resize", handleResize)
      }
    }, [])
    return windowSize
  }
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > theme.breakpoints.nav && isMobileNavOpen) {
      setMobileNavOpen(false)
    }
  }, [size, isMobileNavOpen])

  return (
    <NavWrapper isMobileNavOpen={isMobileNavOpen}>
      <Link to="/">
        <p className="placeholder">Chaise Levy</p>
      </Link>
      <NavItems>
        {navLinks.map((link, i) => (
          <Link key={`link ${i}`} className={`a-tag-${i}`} to={link.to}>
            <div>
              <p className={`menu-item-text`}>{link.text}</p>
            </div>
          </Link>
        ))}
      </NavItems>
      <MobileMenuButton
        setMobileNavOpen={() => setMobileNavOpen(!isMobileNavOpen)}
        isMobileNavOpen={isMobileNavOpen}
      />
    </NavWrapper>
  )
}

export default withTheme(Navbar)
