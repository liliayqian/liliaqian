import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.footerText}>Copyright {data.site.siteMetadata.author} 2021. Created using GatsbyJS and Sass. </p>
        </footer>
    )
}

export default Footer