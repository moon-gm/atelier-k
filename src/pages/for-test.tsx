// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ForTest = (props: PageProps) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            },
            file(relativePath: { eq: "2013/August/2013-08_01.jpg" }) {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
    `)

    return (
  <Layout>
    <SEO title="For Test" />

    {console.log('■ PageProps' ,props)}
    {console.log('■ GraphQL:sitePagedata' ,data.site.siteMetadata.title)}
    {console.log('■ GraphQL:sitePagedata' ,data.site.siteMetadata.description)}
    {console.log('■ GraphQL:file' ,data.file.childImageSharp.fluid)}

    <h1>props(PageProps)確認</h1>
    <br></br>

    <p>[props.path] => {props.path}</p>
    <br></br>

    <p>[props.children] => {props.children}</p>
    <br></br>

    <p>[props.location.host] => {props.location.host}</p>
    <br></br>

    <p>[props.location.hostname] => {props.location.hostname}</p>
    <br></br>

    <p>[props.location.href] => {props.location.href}</p>
    <br></br>

    <p>[props.location.origin] => {props.location.origin}</p>
    <br></br>

    <p>[props.location.pathname] => {props.location.pathname}</p>
    <br></br>

    <p>[props.location.state] => {props.location.state}</p>
    <br></br>
    <br></br>

    <h1>GraphQL実行内容確認</h1>
    <br></br>

    <h2>site（site以下は自由に定義）</h2>
    <br></br>

    <p>[data.site.sitePagedata.array] => {data.site.siteMetadata.title}</p>
    <br></br>

    <p>[data.site.sitePagedata.object.a] => {data.site.siteMetadata.description}</p>
    <br></br>

    <h2>file</h2>
    <br></br>

    <p>[data.file.childImageSharp.fluid.base64] => {data.file.childImageSharp.fluid.base64}</p>
    <br></br>
    <p>[data.file.childImageSharp.fluid.src] => {data.file.childImageSharp.fluid.src}</p>
    <br></br>
    <p>[data.file.childImageSharp.fluid.srcset] => {data.file.childImageSharp.fluid.srcset}</p>
    <br></br>
    <p>[data.file.childImageSharp.fluid.sizez] => {data.file.childImageSharp.fluid.sizes}</p>
    <br></br>

  </Layout>
)}

export default ForTest
