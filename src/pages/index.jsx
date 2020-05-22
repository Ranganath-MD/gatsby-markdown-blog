import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Styles from "../styles/layout.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={Styles.main_container}>
      <h2>Rjs.Njs BLOG </h2>
      <p>React js and Node js articles</p>
    </div>
  </Layout>
)


export default IndexPage
