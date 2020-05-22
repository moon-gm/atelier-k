import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../../sass/module/area/footer.module.scss"

const Footer = ({ siteFooter, classFooter, classFooterFrame }) => (
  // 3:フッターエリア
  <footer className={ classFooter }>
    <div className={ classFooterFrame }>

      {/* テキスト */}
      <h1 className={ Styles.texts }>
        <Link
          to={ `${ process.env.APP_NAME }` !== null ? `${ process.env.APP_NAME }#top` : "#top" }
          className={ Styles.link }
        >
          { siteFooter }
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
