import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

//local imports
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    // const data = useStaticQuery(graphql`
    //     query SITE_INDEX_QUERY {
    //         site {
    //             siteMetadata {
    //                 title
    //                 description
    //             }
    //         }
            
    //         allMarkdownRemark (
    //             sort: { fields: [frontmatter___date], order: DESC }
    //         ) {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }

    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)

    const data = useStaticQuery(graphql`
        query SITE_INDEX_QUERY {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: { published: { eq: true } } }
            ) {
                nodes {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <ol className={blogStyles.posts}>
                {data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                    <li className={blogStyles.post}>
                            <Link to={fields.slug}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                                    <p style={{flex: 1, alignSelf: 'flex-start', fontSize: '.8rem',}}>{frontmatter.title}</p>
                                    <p style={{fontSize: '0.8rem'}}>{frontmatter.date}</p>
                                </div>
                            </Link>
                        {/* <p className={blogStyles.excerpt}>{excerpt}</p> */}
                    </li>
                ))}
            </ol>

        {/* <ol className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map((edge) => {
                return (
                    <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                                    <p style={{flex: 1, alignSelf: 'flex-start', fontSize: '.8rem',}}>{edge.node.frontmatter.title}</p>
                                    <p style={{fontSize: '0.8rem'}}>{edge.node.frontmatter.date}</p>
                                </div>
                            </Link>

                    </li>
                )
            })}
        </ol> */}

        </Layout>
    )
}

export default BlogPage