import styled from 'styled-components'
import Img from 'gatsby-image'

import Section from './Section'

// Never import this to Index page
export const StyledImg = styled(Img)`
  top: 0;
  right: auto;
  bottom: 0;
  left: 0;
`

const SectionHero = styled(Section)`
  position: relative;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`

export default SectionHero
