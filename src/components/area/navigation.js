import PropTypes from "prop-types"
import React from "react"
import NavBtn from "../parts/nav-btn"
import Config from "../../config/config_nav-btn.js"
import Styles from "../../sass/module/area/navigation.module.scss"

const Navigation = ({ classNav, classNavFrame }) => (
    // 2:ナビゲーションエリア
    <nav className={ classNav }>
        <div className={ classNavFrame }>

            {/* ナビゲーションの見出し */}
            <div className={ Styles.btnStyle }>
                <p className={ Styles.text }>
                    Gallery
                </p>
            </div>

            {/* ナビゲーションボタン */
                // Configの設定値をループ
                Config.map( item => { return (
                    <NavBtn
                        linkText={ item.to }
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
