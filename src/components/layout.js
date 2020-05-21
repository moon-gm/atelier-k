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
            <Header
                className="header-area"
                siteTitle={ data.site.siteMetadata.title }
            />

            {/* 2:ナビゲーションエリア */}
            <Navigation
                className="nav-area"
            />

            {/* 3:コンテンツエリア */}
            <div className="contents-area">
                <div className="frame-zone flex-box">
                    {/* 3-1:メインエリア */}
                    <main className="main-area">
                        <div className="contents-frame contents-frame__main-area">
                            { children }
                        </div>
                    </main>
                    {/* 3-2:サイドエリア */}
                    <Aside
                        className="aside-area"
                        contentsFrame="contents-frame contents-frame__aside-area"
                    />
                </div>
            </div>

            {/* 4:フッターエリア */}
            <Footer
                className="footer-area"
                siteFooter={ data.site.siteMetadata.footer }
            />
        </>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
