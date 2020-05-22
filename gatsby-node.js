const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")

        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
      query{
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        category
                    }
                }
            }
        }
      }
    `
    )
    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query in gatsby-node.js`)
        return
    }
    // Create pages for each markdown file.
    const blogPostTemplate = path.resolve(`src/templates/blog-template.jsx`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const path = node.fields.slug
        createPage({
            path,
            component: blogPostTemplate,
            context: {
                slug: path,
            },
        })
    })
}