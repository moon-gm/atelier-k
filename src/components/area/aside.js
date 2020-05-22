import PropTypes from "prop-types"
import React from "react"
import Styles from "../../sass/module/area/contents-aside.module.scss"
import Config from "../../config/config_aside.js"
import Img from "../parts/image"

const Aside = ({ className, contentsFrame }) => (
    // 3-2:サイドエリア
    <aside className={ className }>
        <div className={ contentsFrame }>

            {/* LINEコンテンツボックス */}
            <div className={ Styles.contentsBox }>

                {/* LINE画像 */}
                <Img fileName="line-icon.png" />

                {/* LINEテキスト */}
                <p className={ Styles.contentsText }>
                    Kuh's LINE Stamps Now on Sale！
                </p>

            </div>

            {/* スタンプコンテンツボックス */
                // Configの設定値をループ
                Config.map( item => { return (
                    <div
                        className={ Styles.contentsBox }
                        key={ item.image }
                    >
                        <a
                            href={ item.url }
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            {/* スタンプ画像 */}
                            <div className={ Styles.contentsImage }>
                                <Img fileName={ item.image } />
                            </div>

                            {/* スタンプタイトル */}
                            <p className={ Styles.contentsText }>
                                { item.title }
                            </p>

                        </a>
                    </div>
                )})
            }

        </div>
    </aside>
)

Aside.propTypes = {
    siteTitle: PropTypes.string,
}

Aside.defaultProps = {
    siteTitle: ``,
}

export default Aside
