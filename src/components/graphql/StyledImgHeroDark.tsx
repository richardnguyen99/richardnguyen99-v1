import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { StyledImg } from '../SectionHero'

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "section-hero-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 1980, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const StyledImgHeroDark: React.FC = () => {
  // Set light section to default
  const data = useStaticQuery(query)

  return (
    <StyledImg
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  )
}

export default StyledImgHeroDark
