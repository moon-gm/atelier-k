import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../../sass/module/area/header.module.scss"

const Header = ({ siteTitle, classHeader, classHeaderFrame }) => (
    // 1:ヘッダーエリア
    <header
        className={ classHeader }
        id="top"
    >
        {/* コンテンツフレーム */}
        <div
            className={ classHeaderFrame }
        >
            {/* タイトルテキスト */}
            <h1
                className={ Styles.titleText }
            >
                <Link
                    to={
                        `${ process.env.APP_NAME }` !== "" ? `${ process.env.APP_NAME }/` : "/"
                    }
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
