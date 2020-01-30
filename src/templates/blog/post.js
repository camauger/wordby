import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./post.module.scss"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "content-marketing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default ({ children, data }) => (
  <article className={`post ${styles.post}`}>
    <Banner />
    <main>{children}</main>
  </article>
)
