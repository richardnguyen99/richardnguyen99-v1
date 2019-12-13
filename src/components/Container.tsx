import styled from 'styled-components'

import { media } from '../utils/mediaQuery'

const Container = styled.div`
  width: 100%;

  /* Justify container's content to center */
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${media.sm`max-width: 540px;`}
  ${media.md`max-width: 720px;`}
  ${media.lg`max-width: 960px;`}
  ${media.xl`max-width: 1040px;`}
`

export default Container
