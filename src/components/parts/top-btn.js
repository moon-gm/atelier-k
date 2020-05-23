import { Link } from "gatsby"
import React from "react"
import Styles from "../../sass/module/parts/top-btn.module.scss"

const TopBtn = ({ getPathName, classTopBtn }) => (
    // トップに戻るボタン
    <div className={ classTopBtn }>
        {/* テキスト */}
        <h1 className={ Styles.texts }>
            <Link
                to={ `${ process.env.APP_NAME }` !== null ? `${ process.env.APP_NAME }${ getPathName }` : getPathName }
                className={ Styles.link }
            >
                Top
            </Link>
        </h1>
    </div>
)

export default TopBtn
