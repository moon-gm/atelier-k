/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Styles from "../sass/layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          footer
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={ data.site.siteMetadata.title } />
      <div className={ Styles.contentsArea }>
        <div className={ Styles.frameZone + ' ' + Styles.flexBox }>
          <main style={{width: 70+'%'}}>{ children }</main>
          <aside style={{width: 30+'%'}}>{ children }</aside>
        </div>
      </div>
      <Footer siteFooter={ data.site.siteMetadata.footer } />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
