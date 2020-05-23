import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBtn from "../components/parts/top-btn"

import { Link } from "gatsby"
import Img from "../components/parts/image"
import Config from "../config/config_gallery-2013.js"
import Styles from "../sass/module/pages/common-gallery.module.scss"

const Gallery2013 = () => (
  <Layout>
    <SEO title="Gallery 2013" />

    {/* ページタイトル */}
    <h1 className="h1">
        Gallery 2013
    </h1>

    { /* ループでコンテナを作成 */
        // 月単位のループ
        Config.map( month => { return (

            /*--- メインコンテナ ---*/
            <div
                className={ Styles.mainContainer }
                key={ month[0].month }
            >

                {/* 月別タイトル */}
                <h2 className="h2">
                    { month[0].month }
                </h2>

                {/*--- 月単位のコンテナ ---*/}
                <div
                    className={ `${ Styles.monthContainer } flex-pc` }
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
                                    to={ `${ process.env.APP_NAME }` !== "" ? `${ process.env.APP_NAME }/images/${ contents.fileName }` : `/images/${ contents.fileName }` }
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
        getPathName ="/2013"
    />

  </Layout>
)

export default Gallery2013
