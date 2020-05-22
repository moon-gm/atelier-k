import PropTypes from "prop-types"
import React from "react"
import NavBtn from "../parts/nav-btn"
import navBtnConfig from "../../config/config_nav-btn.js"
import Styles from "../../sass/module/area/navigation.module.scss"

const Navigation = ({ classNav, classNavFrame }) => (
    // 1.5:ナビゲーションーエリア
    <nav
        className={ classNav }
    >
        {/* コンテンツフレーム */}
        <div
            className={ classNavFrame + ' ' + "flex-box" }
        >
            <div
                className={ Styles.textColor + ' ' + Styles.btnStyle }
            >
                <p>
                    Gallery
                </p>
            </div>
            {
                // リンクボタンを複数生成
                navBtnConfig.map( item => { return (
                    <NavBtn
                        linkText={ item.link }
                        linkTo={ item.to }
                        key={ item.to }
                    />
                )})
            }
        </div>
    </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
