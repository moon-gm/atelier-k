import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBtn from "../components/parts/top-btn"

import Image from "../components/parts/image"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1 className="h1">
            Introduce our lovely cat, Kuh!
        </h1>
        <div>
            <h2 className="h2">
                Introduction
            </h2>
            <p className="p">
                This is a hobby site that we introduce our cat, Kuh-chan.
                We mainly introduce him by using many pictures of him.
            </p>
            <p className="p">
                First of all, we have to explain him under the section.
            </p>
        </div>
        <div>
            <h2 className="h2">
                This is kuh-chan!
            </h2>
            <div style={{ maxWidth: "300px" }}>
                <Image fileName="stamp-4.png"/>
            </div>
            <p className="p">
                Hi, I'm Kuh!
            </p>
            <p className="p">
                It was June, 2013 that he came to our house.
                He was alone when we saw him in Hiratsuka.
                His mother or family were not arrond there.
                He looked like small and hungry, we decided to protect him right now.
            </p>
            <p className="p">
                We took him to our house and feed some cat foods.
                Then, he was fine and started walking around and playing with some toys.
                This wonderful day when we met came to be his birthday, because it was no way to know his birthday.
            </p>
            <p className="p">
                From that time to nowadays he has been growing up smarter and smarter.
                Recently, he has been the strongest cat than any other human being in our home.
                So he often bites our hands, legs, ..etc.
            </p>
            <p className="p">
                But he is peaceful and kind.
                He cannot even kill bugs, for exsample, mosquetoes, ants.
                They are friends of him, he protects them when we are going to kill them.
                He dosen't like any conflict.
                He is very smart and we respect him.
            </p>
            <p className="p">
                Finally, we think we want to introduce his many faces.
            </p>
        </div>
        <TopBtn
            classTopBtn="top-btn"
            getPathName = { window.location.pathname }
        />
    </Layout>
)

export default IndexPage
