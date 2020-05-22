import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Styles from "../styles/template.module.scss"
import Avatar from "../images/avatar1.svg"
import SEO from '../components/seo'
const BlogTemplate = ({ data }) => {
    return (
        <Layout>
            <SEO title={data.markdownRemark.frontmatter.title}/>
            <div className={Styles.main_container}>
                <h1 className={Styles.title}>{data.markdownRemark.frontmatter.title}</h1>
                <div className={Styles.user_container}>
                    <div className={Styles.img_container}>
                        <img
                            src={Avatar}
                            alt="avatar"
                        />
                    </div>
                    <div>
                        <p className={Styles.author}>
                            {data.markdownRemark.frontmatter.author}
                        </p>
                        <p className={Styles.date}>
                            {data.markdownRemark.frontmatter.date}
                        </p>
                    </div>
                </div>

                <div
                    className={Styles.content}
                    dangerouslySetInnerHTML={{
                        __html: data.markdownRemark.html
                    }}>
                </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate


export const query = graphql`
    query MyQuery($slug:String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                author
                category
                date
                title
            }
            html
            timeToRead
        }
    }
`