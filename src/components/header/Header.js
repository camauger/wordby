import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./Logo"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </div>
    <nav>
      <Link to="/">Stratégie</Link>
      <Link to="/">Programmation</Link>
      <Link to="/">Modernisation</Link>
      <Link to="/">G Suite</Link>
      <Link to="/">Contact</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
