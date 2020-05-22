import { Link } from "gatsby"
import React from "react"
import Styles from "../../sass/module/area/navigation.module.scss"

const NavBtn = ({ linkText, linkTo }) => (
    // ナビゲーションボタン
    <div className={ Styles.btnStyle }>
        <Link
            to={ `${ process.env.APP_NAME }` !== "" ? `${ process.env.APP_NAME }/${ linkTo }/` : linkTo }
            className={ Styles.link }
        >
            { linkText }
        </Link>
    </div>
)

export default NavBtn
