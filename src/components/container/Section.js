import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "./container.module.scss"

class Section extends React.Component {
  render() {
    return (
      <section
        className={`container ${styles.container} ${this.props.className}`}
      >
        {this.props.children}
      </section>
    )
  }
}

export default Section