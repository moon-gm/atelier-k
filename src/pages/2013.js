import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/parts/image"
import gallery2013Config from "../config/config_gallery-2013.js"
import Styles from "../sass/module/pages/common-gallery.module.scss"

const Gallery2013 = () => (
  <Layout>
    <SEO title="Gallery 2013" />
    <h1
        className={ Styles.title }
    >
        〜 Gallery 2013 〜
    </h1>
    { /* ループでコンテナを作成 */
        /* 月単位のループ */
        gallery2013Config.map( month => { return (
            // メインコンテナ
            <div
                className={ Styles.meinContainer }
            >

                {/* 月別タイトル */}
                <h2
                    className={ Styles.monthTitle }
                >
                    { month[0].month }
                </h2>

                {/* フレックスコンテナ */}
                <div
                    className={ Styles.monthContainer + ' ' + Styles.flexBox }
                >
                    { /* コンテンツ単位のループ */
                        month.map( contents => { return (
                            <div
                                className={ Styles.contentsContainer }
                            >
                                {/* 画像コンテンツ */}
                                <div
                                    className={ Styles.imageContents }
                                >
                                    <Img fileName={ contents.fileName } />
                                </div>
                                {/*  テキストコンテンツ */}
                                <div
                                    className={ Styles.textContents }
                                >
                                    <p>
                                        { contents.comment }
                                    </p>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        )})
    }
  </Layout>
)

export default Gallery2013
