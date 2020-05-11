import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../sass/footer.module.scss"

const Footer = ({ siteFooter }) => (
  // フッターエリア
  <footer
    className={Styles.footerArea}
  >
    {/* コンテンツフレーム */}
    <div
      className={Styles.frameZone}
    >
      {/* タイトルテキスト */}
      <h1 className={Styles.titleText}>
        <Link
          to=""
          className={Styles.link}
        >
          {/* gatsby-config.jsで定義(layout.jsで呼び出している) */}
          {siteFooter}
        </Link>
      </h1>
    </div>
  </footer>
)

Footer.propTypes = {
  siteFooter: PropTypes.string,
}

Footer.defaultProps = {
  siteFooter: ``,
}

export default Footer
