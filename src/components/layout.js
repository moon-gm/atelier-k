/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./area/header"
import Navigation from "./area/navigation"
import Aside from "./area/aside"
import Footer from "./area/footer"

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

            {/* 1.5:ナビゲーションエリア */}
            <Navigation />

            {/* 2:コンテンツエリア */}
            <div className="contents-area">
                <div className="frame-zone flex-box">
                    {/* 2-1:メインエリア */}
                    <main className="main-area">
                        <div className="contents-frame">
                            { children }
                        </div>
                    </main>
                    {/* 2-2:サイドエリア */}
                    <Aside
                        asideArea="aside-area"
                        contentsFrame="contents-frame"
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
