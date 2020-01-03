import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Square from '../Square'

const Avatar: React.FC = () => {
  const data = useStaticQuery(graphql`
    query Avatar {
      placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{
        width: '100%',
        zIndex: 0,
        maxWidth: '80px',
        maxHeight: '80px',
        borderRadius: '4px',
      }}
    />
  )
}

export default Avatar
