import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Styles from "../styles/articles.module.scss"
import ReactBanner from "../images/react1.jpeg"
import {
    Col, Row,
    Card,
    CardTitle,
    CardBody,
} from "shards-react";
const ReactBlog = () => {
    const data = useStaticQuery(graphql`{
        allMarkdownRemark(filter : { frontmatter: {category: { eq: "react" }}}){
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        html
                        timeToRead
                        excerpt
                        fields{
                            slug
                        }
                    }
                }
            }

        }
    `)
    return (
        <Layout>
            <SEO title="React articles" />
            <div>
                <img src={ReactBanner} alt="react" width="100%"/>
            </div>
            <Row>
                {
                    data.allMarkdownRemark.edges.map((item, i) => {
                        const { title, date } = item.node.frontmatter
                        return (
                            <Col xs={12} sm={6} md={4} key={i}>
                                <Card style={{ minHeight: 200, marginTop: "20px"}}>
                                    <CardBody>
                                        <CardTitle>
                                            <h2 className={Styles.title}><Link to={`/${item.node.fields.slug}/`}>{title}</Link></h2>
                                        </CardTitle>
                                        <div className={Styles.info_container}>
                                            <p className={Styles.info}>{date}</p>
                                            <p className={Styles.info}>{item.node.timeToRead} mins read</p>
                                        </div>
                                    </CardBody>

                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

        </Layout>
    )
}

export default ReactBlog
