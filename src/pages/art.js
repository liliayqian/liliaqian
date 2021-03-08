import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ArtListStyles from './art.module.scss'

const ArtPage = () => {
    return (
      <Layout>
            <ul className={ArtListStyles.list}>
                <li><Link to='/artpages/comics' className={ArtListStyles.link}>Comics</Link></li>
                <li><Link to='/artpages/graphite' className={ArtListStyles.link}>Graphite</Link></li>
                <li><Link to='/artpages/illustrations' className={ArtListStyles.link}>Illustrations</Link></li>
            </ul>
      </Layout>
    )
  }

export default ArtPage

// const ArtPage = () => {
//     const data = useStaticQuery(graphql`
//     query {
//       allFile(
//         filter: {
//           extension: { regex: "/(jpg)|(png)|(jpeg)/" }
//           relativeDirectory: { eq: "art" }
//         }
//       ) {
//         edges {
//           node {
//             base
//             childImageSharp {
//               fluid {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//     return (
//       <Layout>
//             <div>
//             {data.allFile.edges.map(image => (
//                 <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
//                     <div style={{maxWidth: '80vh', flex: '1', margin: '1rem'}}>
//                         <Img
//                         fluid={image.node.childImageSharp.fluid}
//                         alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
//                         />
//                     </div>
//                 </div>
//             ))}
//             </div>
//       </Layout>
//     )
//   }

// export default ArtPage