import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import styles from "./container.module.scss"

class Section extends React.Component {
  render() {
    const Section = styled.section`
      display: flex;
      flex-direction: ${this.props.flexDirection || "row"};
      padding-top: ${this.props.paddingTop || "3rem"};
      padding-bottom: ${this.props.paddingBottom || "3rem"};
      background-color: ${this.props.backgroundColor || "#091437"};
      color: ${this.props.backgroundColor === "#091437" ? "white" : "black"};
    `
    return <Section className={`container`}>{this.props.children}</Section>
  }
}

export default Section
