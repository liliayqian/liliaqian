import React from 'react'
import { Link } from 'gatsby'

//local imports
import Layout from '../components/layout'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <div className={aboutStyles.content}>
                <h3>About</h3>
                    <ul>
                        <li>Lilia Qian</li>
                        <li>georgetown 2023 // economics + psychology</li>
                        <li>I like to draw + write + read</li>
                        <li>check out my weekly <Link to='../artpages/comics'>comic strip</Link></li>
                    </ul> 
                <h3>Contact</h3>
                <ul>
                    <li>email me at liliayqian@gmail.com</li>
                    {/* <li>add me on <a href="https://www.linkedin.com/in/lilia-qian-b76b77173/" target="_blank" rel="noreferrer">LiNkEdIn</a></li> */}
                    <li>view my art on <Link to='https://www.instagram.com/2grape_/?hl=en' target="_blank" rel="noreferrer">Instagram</Link></li>
                </ul>
            </div>
        </Layout>
    )
}

export default AboutPage