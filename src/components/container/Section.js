import React from "react"

class Section extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section className={`container ${this.props.className}`}>
        {this.props.children}
      </section>
    )
  }
}

export default Section
