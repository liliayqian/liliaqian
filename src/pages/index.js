import React from "react"

//component imports
import Layout from '../components/layout'
import SEO from '../components/seo'

//asset imports
import snake from "../assets/snake.gif"
import image from '../assets/home.png'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
          title= 'Welcome'
          description = 'Home'
          image={image}
        />
      <img src={snake} alt="wiggle wiggle wiggle" title="wiggle wiggle wiggle"/>
    </Layout>
  )
}

export default IndexPage