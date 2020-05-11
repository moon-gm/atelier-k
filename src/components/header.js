import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../sass/header.module.scss"

const Header = ({ siteTitle }) => (
  // ヘッダーエリア
  <header
    className={ Styles.headerArea }
  >
    {/* コンテンツフレーム */}
    <div
      className={ Styles.frameZone }
    >
      {/* タイトルテキスト */}
      <h1 className={ Styles.titleText }>
        <Link
          to="/"
          className={ Styles.link }
        >
          {/* gatsby-config.jsで定義(layout.jsで呼び出している) */}
          { siteTitle }
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
