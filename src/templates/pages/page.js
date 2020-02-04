import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
//import styles from "./post.module.scss"

const PageTemplate = ({ data }) => {
  const pageData = data.wordpressPage
  let featuredImg = undefined

//   if (pageData.featured_media) {
//     featuredImg = pageData.featured_media.localFile.childImageSharp.fixed
//   }

  return (
    <Layout>
      <SEO title={pageData.title} description={pageData.excerpt} />
      {featuredImg && <Img fixed={featuredImg} />}
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: pageData.title }} />
        <main dangerouslySetInnerHTML={{ __html: pageData.content }} />
      </article>
    </Layout>
  )
}
export default PageTemplate

export const query = graphql`
   {
    wordpressPage(wordpress_id: { eq: 2 }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
