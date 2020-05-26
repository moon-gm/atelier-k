import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBtn from "../components/parts/top-btn"

import { Link } from "gatsby"
import Img from "../components/parts/image"
import Config from "../config/config_gallery-2017.js"
import Styles from "../sass/module/pages/common-gallery.module.scss"

const Gallery2017 = () => (
  <Layout>
    <SEO title="Gallery 2017" />

    {/* ページタイトル */}
    <h1 className="h1">
        Gallery 2017
    </h1>

    {/* 月別フォルダタイトル */}
    <h2 className="h2">
        Jump to
    </h2>

    {/* 月別フォルダ */}
    <div className="flex-all flex-wrap">
        {/* ループでジャンプする月別フォルダを作成 */
            Config.map ( month => { return (
                <div
                    className={ Styles.monthFolder }
                    key={ month[0].month }
                >
                    <Link
                        to={ `${ process.env.APP_NAME }` !== "" ? `#${ month[0].month }` : `/2017#${ month[0].month }` }
                    >
                        <h3 className={ Styles.monthTitle }>
                            { month[0].month }
                        </h3>
                        <Img fileName="palette-icon.png" />
                    </Link>
                </div>
            )})
        }
    </div>

    { /* ループでコンテナを作成 */
        // 月単位のループ
        Config.map( month => { return (

            /*--- メインコンテナ ---*/
            <div
                className={ Styles.mainContainer }
                key={ month[0].month }
            >
                {/* ヘッダーの固定によるid遷移のズレ対策スペーサー */}
                <div
                    className={ Styles.spacerForId }
                    id={ month[0].month }
                >

                </div>
                {/* 月別タイトル */}
                <h2 className="h2">
                    { month[0].month }
                </h2>

                {/*--- 月単位のコンテナ ---*/}
                <div
                    className={ `${ Styles.monthContainer } flex-pc flex-wrap` }
                    key={ month[0].month }
                >
                    {// コンテンツ単位のループ
                        month.map( contents => { return (

                            /*--- コンテンツ単位のコンテナ ---*/
                            <div
                                className={ Styles.contentsContainer }
                                key={ contents.fileName }
                            >
                                <Link
                                    to={ `${ process.env.APP_NAME }` !== "" ? `${ process.env.APP_NAME }/images/2017/${ contents.month }/${ contents.fileName }` : `/images/2017/${ contents.month }/${ contents.fileName }` }
                                    target="_blank"
                                    rel="noreferrer"
                                >

                                    {/* 画像コンテンツ */}
                                    <div className={ Styles.imageContents }>
                                        <Img fileName={ contents.fileName } />
                                    </div>

                                    {/*  テキストコンテンツ */}
                                    <div className={ Styles.textContents }>
                                        <p>
                                            { contents.comment }
                                        </p>
                                    </div>

                                </Link>
                            </div>

                        )})
                    }
                </div>

            </div>

        )})
    }

    <TopBtn
        classTopBtn="top-btn"
        getPathName ="/2017"
    />

  </Layout>
)

export default Gallery2017
