import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBtn from "../components/parts/top-btn"

import { Link } from "gatsby"
import Img from "../components/parts/image"
import Styles from "../sass/module/pages/common-gallery.module.scss"

// --- 年によって変更する必要のある箇所 -------------------
import Config from "../config/config_gallery-2013.js"
const title ="Gallery 2013"
// ---------------------------------------------------

export default ( props ) => (
  <Layout>
    <SEO title={ title } />

    {/* ページタイトル */}
    <h1 className="h1">
        { title }
    </h1>

    {/* 月別ジャンプリストタイトル */}
    <h2 className="h2">
        Jump to
    </h2>

    {/* 月別ジャンプリスト */}
    <div className="flex-all flex-wrap">
        {/* ループでジャンプする月別ジャンプリストを作成 */
            Config.map ( month => { return (
                <div
                    className={ Styles.monthFolder }
                    key={ month[0].month }
                >
                    <Link
                        to={ `${ process.env.APP_NAME }` !== "" ? `#${ month[0].month }` : `${ props.path }#${ month[0].month }` }
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
                                    to={ `${ process.env.APP_NAME }` !== "" ? `${ process.env.APP_NAME }/images${ props.path }${ contents.month }/${ contents.fileName }` : `/images${ props.path }${ contents.month }/${ contents.fileName }` }
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
        getPathName ={ props.path }
    />

  </Layout>
)

