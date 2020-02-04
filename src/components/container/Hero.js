import React from "react"

class Hero extends React.Component {
  render() {
    return (
      <section className={`hero ${this.props.className}`}>
        {this.props.children}
      </section>
    )
  }
}

export default Hero
