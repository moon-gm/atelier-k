import { Link } from "gatsby"
import React from "react"
import Styles from "../sass/navigation.module.scss"

const NavBtn = ({ linkText, linkTo }) => (
    // ナビゲーションボタン
    <div
        className={ Styles.btnStyle }
    >
        <Link
            to={ linkTo }
            className={ Styles.link }
        >
            { linkText }
        </Link>
    </div>
)

export default NavBtn
