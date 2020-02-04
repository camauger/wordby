import React from "react"

import PropTypes from "prop-types"


class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const className = ` ${this.props.theme}`

    return <a className={className}>{this.props.children}</a>
  }
}

export default Button
