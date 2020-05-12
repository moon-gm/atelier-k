// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../sass/contents-aside.module.scss"

const Aside = ({ asideArea, contentsFrame }) => (
  // 2-2:サイドエリア
  <aside className={ asideArea }>
    {/* コンテンツフレーム */}
    <div className={ contentsFrame }>
      aaa
    </div>
  </aside>
)

Aside.propTypes = {
  siteTitle: PropTypes.string,
}

Aside.defaultProps = {
  siteTitle: ``,
}

export default Aside
