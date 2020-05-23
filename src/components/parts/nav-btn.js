import React from "react"
import Styles from "../../sass/module/area/navigation.module.scss"

const NavBtn = ({ linkText, linkTo }) => (
    // ナビゲーションボタン
    <div className={ Styles.btnStyle }>
        <a
            href={ `${ process.env.APP_NAME }` !== "" ? `${ process.env.APP_NAME }/${ linkTo }/` : linkTo }
            className={ `${ Styles.link } js-nav-btn` }
        >
            { linkText }
        </a>
    </div>
)

export default NavBtn
