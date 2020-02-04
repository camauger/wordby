import React from "react"
import styles from "./container.module.scss"


class Section extends React.Component {
  constructor(props) {
    super(props)
  }
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
