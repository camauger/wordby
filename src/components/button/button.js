import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import styles from "./button.module.scss"
import "../../global/colors.scss"

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const className = `${styles[this.props.size]} ${this.props.theme}`

    return <a className={className}>{this.props.children}</a>
  }
}

export default Button
