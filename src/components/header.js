import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    return (
    <header className={headerStyles.header}>
        <nav className={headerStyles.navBar}>

            <ul className={headerStyles.navListLeft}>
                <li><Link className={headerStyles.navItemLeft} activeClassName={headerStyles.activeNavItem} to="/art">Art</Link></li>
                <li><Link className={headerStyles.navItemLeft} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
            </ul>
            
            <Link className={headerStyles.navHomeText} activeClassName={headerStyles.activeNavItem} to="/">{data.site.siteMetadata.title}</Link>

            <ul className={headerStyles.navListRight}>
                <li><Link className={headerStyles.navItemRight} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header