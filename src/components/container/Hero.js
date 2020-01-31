import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "./container.module.scss"

class Hero extends React.Component {
  render() {
    return (
      <section
        className={`hero ${styles.hero} ${this.props.className}`}
      >
        {this.props.children}
      </section>
    )
  }
}

export default Hero
