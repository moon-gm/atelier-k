import PropTypes from "prop-types"
import React from "react"
import Styles from "../../sass/module/area/contents-aside.module.scss"
import asideConfig from "../../config/config_aside.js"
import Img from "../parts/image"

const Aside = ({ className, contentsFrame }) => (
    // 2-2:サイドエリア
    <aside className={ className }>
        {/* コンテンツフレーム */}
        <div className={ contentsFrame }>
            <div
                className={ Styles.sideBox }
            >
                <Img fileName="line-icon.png" />
                <p>
                    Kuh's LINE Stamps Now on Sale！
                </p>
            </div>
                {
                    // スタンプ一覧をループで表示
                    asideConfig.map( item => { return (
                        <div
                            className={ Styles.sideBox }
                            key={ item.srcImg }
                        >
                            <a
                                className={ Styles.link }
                                href={ item.url }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* スタンプ画像 */}
                                <div className={ Styles.lineIcon }>
                                    <Img fileName={ item.srcImg } />
                                </div>
                                {/* スタンプタイトル */}
                                <p>
                                    { item.textA }
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
