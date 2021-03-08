import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/layout'

const IllustrationsPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "art/illustrations" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality:90){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

    return (
      <Layout>
            <div>
            {data.allFile.edges.map(image => (
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div style={{maxWidth: '80vh', flex: '1', margin: '1rem 0'}}>
                        <Img
                        fluid={image.node.childImageSharp.fluid}
                        alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                        />
                    </div>
                </div>
            ))}
            </div>
      </Layout>
    )
  }

export default IllustrationsPage