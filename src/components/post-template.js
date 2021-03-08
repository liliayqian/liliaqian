import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import postStyle from './post.module.scss'

import Layout from './layout'

export const query = graphql
    `
    query PostsByID($id: String!) {
        mdx(
            id: { eq: $id }
        ){
            body
            frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
            }
        }
    }
`
// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: {slug: { eq: $slug} }) {
//             frontmatter {
//                 title
//                 date
//             }
//             html
//         }
//     }
// `

export default ({ data }) => {
    const { frontmatter, body } = data.mdx

    return (
        <Layout>
            <MDXProvider
                components={{
                    h1: postStyle.H1,
                    h2: postStyle.H2,
                    h3: postStyle.H3,
                    p: postStyle.P,
                    li: postStyle.LI,
                }}
                >
            </MDXProvider>

            <div>
                <h1>{frontmatter.title}</h1>
                <p className={postStyle.date}>{frontmatter.date}</p>    
                <MDXRenderer>{body}</MDXRenderer>
            </div>
        </Layout>
    )
}

// const Post = (props) => {
//     return (
//         <Layout>
//             <h1>{props.data.markdownRemark.frontmatter.title}</h1>
//             <p className={postStyle.date}>{props.data.markdownRemark.frontmatter.date}</p>
//             <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} className={postStyle.text}>
//             </div>
//         </Layout>

//     )
// }

// export default Post