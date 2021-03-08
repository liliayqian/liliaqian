const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `${value}`,
        })
    }
}
// const path = require ('path')
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql
    (`
        query {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges

    posts.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/post-template.js`),
            context: { id: node.id },
            // context: { slug: post.fields.slug, },
        })
    })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions
//     const postTemplate = path.resolve('./src/templates/post.js')
//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)
    
//     res.data.allMarkdownRemark.edges.forEach((edge) => {
//         createPage({
//             component: postTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
// }

