/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header/Header"
import "./layout.scss"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global/styles"
import { GlobalVariables } from "../global/variables"
import { lightTheme } from "../global/theme"

const Main = styled.main`
  width: 100%;
  
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <GlobalVariables/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <Main>{children}</Main>
          <footer>© {new Date().getFullYear()}</footer>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
