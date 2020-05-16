import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../sass/module/pages/common-gallery.module.scss"

const Gallery2013 = () => (
  <Layout>
    <SEO title="Gallery 2013" />
    <h1
        className={ Styles.title }
    >
        〜Gallery 2013〜
    </h1>
    <div
        className={ Styles.flexBox }
    >
        {/* 画像＋コメントのコンテナ */}
        <div
            className={ Styles.container }
        >
            {/* 画像コンテンツ */}
            <div
                className={ Styles.imageContents }
            >
                <img src="" alt="" />
            </div>
            {/* テキストコンテンツ */}
            <div
                className={ Styles.textContents }
            >
                <p>

                </p>
            </div>
        </div>
    </div>
  </Layout>
)

export default Gallery2013
