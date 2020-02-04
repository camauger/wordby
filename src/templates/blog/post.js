// import React from "react"
// import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import styles from "./post.module.scss"

// const Banner = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "content-marketing.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 1500, maxHeight: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Img

//       fluid={data.placeholderImage.childImageSharp.fluid}
//     />
//   )
// }

// export default ({ children, data }) => (
//   <article className={`post ${styles.post}`}>
//     <Banner />
//     <main>{children}</main>
//   </article>
// )

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import styles from "./post.module.scss"

const BlogPostTemplate = ({ data }) => {
  const postData = data.wordpressPost
  let featuredImg = undefined

  if (postData.featured_media) {
    featuredImg = postData.featured_media.localFile.childImageSharp.fixed
  }

  return (
    <Layout>
      <SEO title={postData.title} description={postData.excerpt} />
      {featuredImg && <Img fixed={featuredImg} />}
      <article className={`post ${styles.post}`}>
        <h1 dangerouslySetInnerHTML={{ __html: postData.title }} />
        <main dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  )
}
export default BlogPostTemplate

export const query = graphql`
  {
    wordpressPost(wordpress_id: { eq: 520 }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

// export const query = graphql`
//   query($id: Int!) {
//     wordpressPost(wordpress_id: { eq: $id }) {
//       title
//       content
//       excerpt
//       date(formatString: "MMMM DD, YYYY")
//     }
//   }
// `
