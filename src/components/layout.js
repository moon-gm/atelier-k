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
import Aside from "./aside"
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
      {/* 1:ヘッダーエリア */}
      <Header siteTitle={ data.site.siteMetadata.title } />

      {/* 2:コンテンツエリア */}
      <div className={ Styles.contentsArea }>
        <div className={ Styles.frameZone + ' ' + Styles.flexBox }>
          {/* 2-1:メインエリア */}
          <main className={ Styles.mainArea }>
            <div className={ Styles.contentsFrame }>
              { children }
            </div>
          </main>
          {/* 2-2:サイドエリア */}
          <Aside
            asideArea={ Styles.asideArea }
            contentsFrame={ Styles.contentsFrame }
          />
        </div>
      </div>

      {/* 3:フッターエリア */}
      <Footer siteFooter={ data.site.siteMetadata.footer } />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
