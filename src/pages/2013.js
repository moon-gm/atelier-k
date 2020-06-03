import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBtn from "../components/parts/top-btn"

import { Link } from "gatsby"
import Img from "../components/parts/image"
import Styles from "../sass/module/pages/common-gallery.module.scss"

// 可変領域 -------------------------------------------
import config from "../config/config_gallery-2013.js"
const pageTitle ="Gallery 2013"
// ---------------------------------------------------

export default ( props ) => {

    // 設定値定義
    const yy = props.location.pathname
    const app = process.env.APP_NAME
    const jumpTitle ="Jump to"

    return (
        <Layout>
            <SEO title={ pageTitle } />

            {/****** 1:ページタイトルエリア -start- ******/}
                <h1 className="h1">
                    { pageTitle }
                </h1>
            {/****** 1:ページタイトルエリア -end- ******/}

            {/****** 2:月別ジャンプエリア -start- ******/}
                {/*** 2-1:月別ジャンプリストタイトル -start- ***/}
                    <h2 className="h2">
                        { jumpTitle }
                    </h2>
                {/*** 2-1:月別ジャンプリストタイトル -end- ***/}

                {/*** 2-2:月別ジャンプリスト -start- ***/}
                    <div className="flex-all flex-wrap">
                        {// ループ:月別ジャンプリストを作成
                            config.map ( months => {

                                // ループ値を変数に格納
                                var mm = months[0].month

                                return (
                                    <div
                                        className={ Styles.monthFolder }
                                        key={ mm }
                                    >
                                        <Link
                                            to={ `${app}` !== "" ? `#${mm}` : `${yy}#${mm}` }
                                        >
                                            <h3 className={ Styles.monthTitle }>
                                                { mm }
                                            </h3>
                                            <Img fileName="palette-icon.png" />
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                {/*** 2-2:月別ジャンプリスト -end- ***/}
            {/****** 2:月別ジャンプエリア -end- ******/}

            {/****** 3:画像コンテンツ表示エリア -start- ******/}
                {// ループ1:月単位コンテナ作成
                    config.map( months => {

                        // ループ値を変数に格納
                        var mm = months[0].month

                        return (
                            <div
                                className={ Styles.mainContainer }
                                key={ mm }
                            >

                                {/*** 3-1:ヘッダーの固定によるid遷移のズレ対策スペーサー -start- ***/}
                                    <div
                                        className={ Styles.spacerForId }
                                        id={ mm }
                                    />
                                {/*** 3-1:ヘッダーの固定によるid遷移のズレ対策スペーサー -end- ***/}

                                {/*** 3-2:月別タイトル -start- ***/}
                                    <h2 className="h2">
                                        { mm }
                                    </h2>
                                {/*** 3-2:月別タイトル -end- ***/}

                                {/*** 3-3:フレックスコンテナ -start- ***/}
                                    <div
                                        className={ `${ Styles.monthContainer } flex-pc flex-wrap` }
                                        key={ mm }
                                    >
                                        {// ループ2:コンテンツ単位コンテナ作成
                                            months.map( contents => {

                                                // 2:ループ値を変数に格納(name_2)
                                                var file = contents.fileName
                                                var comment = contents.comment

                                                return (
                                                    <div
                                                        className={ Styles.contentsContainer }
                                                        key={ file }
                                                    >
                                                        <Link
                                                            to={ `${app}` !== "" ? `${app}/images${yy}${mm}/${file}` : `/images${yy}${mm}/${file}` }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >

                                                            {/* 3-3-1:画像コンテンツ -start- */}
                                                                <div className={ Styles.imageContents }>
                                                                    <Img fileName={ file } />
                                                                </div>
                                                            {/* 3-3-1:画像コンテンツ -end- */}

                                                            {/* 3-3-2:テキストコンテンツ -start- */}
                                                                <div className={ Styles.textContents }>
                                                                    <p>
                                                                        { comment }
                                                                    </p>
                                                                </div>
                                                            {/* 3-3-2:テキストコンテンツ -end- */}

                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                {/*** 3-3:月単位のコンテナ -end- ***/}

                            </div>
                        )
                    })
                }
            {/****** 3:画像コンテンツ表示エリア -end- ******/}

            {/****** 4:トップに戻るボタンエリア -start- ******/}
            <TopBtn
                classTopBtn="top-btn"
                getPathName ={ yy }
            />
            {/****** 4:トップに戻るボタンエリア -end- ******/}

        </Layout>
    )
}
