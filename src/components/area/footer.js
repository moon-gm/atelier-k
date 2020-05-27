import PropTypes from "prop-types"
import React from "react"
import Styles from "../../sass/module/area/footer.module.scss"

const Footer = ({ siteFooter, classFooter, classFooterFrame }) => (
  // 4:フッターエリア
  <footer className={ classFooter }>
    <div className={ classFooterFrame }>

      {/* テキスト */}
      <h1 className={ Styles.texts }>
          { siteFooter }
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
