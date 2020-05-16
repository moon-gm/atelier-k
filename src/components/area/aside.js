import PropTypes from "prop-types"
import React from "react"
import Styles from "../../sass/module/area/contents-aside.module.scss"
import asideConfig from "../../config/config_aside.js"
import Img from "../parts/image"

const Aside = ({ asideArea, contentsFrame }) => (
    // 2-2:サイドエリア
    <aside className={ asideArea }>
        {/* コンテンツフレーム */}
        <div className={ contentsFrame }>
            <Img fileName="line-icon.png" />
            <p>
                くうちゃんLINEスタンプ各種販売中！
            </p>
                {
                    // スタンプ一覧をループで表示
                    asideConfig.map( item => { return (
                        <div
                            className={ Styles.sideBox }
                            key={ item.srcImg }
                        >
                            {/* スタンプ画像 */}
                            <p className={ Styles.lineIcon }>
                                <Img fileName={ item.srcImg } />
                            </p>
                            {/* スタンプタイトル */}
                            <p>
                                <a
                                    className={ Styles.link }
                                    href={ item.url }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    { item.textA }
                                </a>
                            </p>
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
