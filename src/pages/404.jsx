import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ErrImg from "../images/404.svg"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div>
        <img src={ErrImg} alt="ErrorImg" />
    </div>
  </Layout>
)

export default NotFoundPage
