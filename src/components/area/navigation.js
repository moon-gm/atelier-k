import PropTypes from "prop-types"
import React from "react"
import NavBtn from "../parts/nav-btn"
import Config from "../../config/config_nav-btn.js"
import DisplayNavBtn from "../../function/nav-list.js"

const Navigation = ({ classNav, classNavFrame }) => (
    // 2:ナビゲーションエリア
    <nav className={ classNav }>
        <div className={ classNavFrame }>

            {/* ナビゲーションボタンの表示選択ボタン */}
            <DisplayNavBtn />

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
