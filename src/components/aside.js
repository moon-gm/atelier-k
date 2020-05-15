// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "../sass/contents-aside.module.scss"

var contentsTexts = [
    {
        'srcImg': 'static/stamp/stamp-1.png',
        'altImg': 'くうちゃんスタンプ画像１',
        'textA': 'part.1 うさぎかぶり',
        'url': 'https://store.line.me/stickershop/product/5719040',
    },
    {
        'srcImg': 'static/stamp/stamp-2.png',
        'altImg': 'くうちゃんスタンプ画像２',
        'textA': 'part.2 基本あいさつ',
        'url': 'https://store.line.me/stickershop/product/6372880',
    },
    {
        'srcImg': 'static/stamp/stamp-3.png',
        'altImg': 'くうちゃんスタンプ画像３',
        'textA': 'part.3 表裏一体空言川柳',
        'url': 'https://store.line.me/stickershop/product/6769775',
    },
    {
        'srcImg': 'static/stamp/stamp-4.png',
        'altImg': 'くうちゃんスタンプ画像４',
        'textA': 'part.4 感情吹き出し',
        'url': 'https://store.line.me/stickershop/product/7101188',
    },
    {
        'srcImg': 'static/stamp/stamp-5.png',
        'altImg': 'くうちゃんスタンプ画像５',
        'textA': 'part.5 文字なし汎用',
        'url': 'https://store.line.me/stickershop/product/7571585',
    },
    {
        'srcImg': 'static/stamp/stamp-6.png',
        'altImg': 'くうちゃんスタンプ画像６',
        'textA': 'part.6 漫画世界',
        'url': 'https://store.line.me/stickershop/product/9730701',
    },
    {
        'srcImg': 'static/stamp/stamp-ctm1.png',
        'altImg': 'くうちゃんスタンプ画像７',
        'textA': 'CTM part.1 プロトタイプ',
        'url': 'https://store.line.me/stickershop/product/9738316',
    },
];

const Aside = ({ asideArea, contentsFrame }) => (
    // 2-2:サイドエリア
    <aside className={ asideArea }>

    {/* コンテンツフレーム */}
    <div className={ contentsFrame }>

        <p>
            <img src="static/stamp/line-icon.png" alt="line-icon"></img>
        </p>
        <p>
            くうちゃんLINEスタンプ各種販売中！
        </p>
            {
                // スタンプ一覧をループで表示
                contentsTexts.map(item => { return (
                    <div className={ Styles.sideBox }>
                        {/* スタンプ画像 */}
                        <p className={ Styles.lineIcon }>
                            <img
                                src={ item.srcImg }
                                alt={ item.altImg }
                            >
                            </img>
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
