import styled from 'styled-components'

const Title = styled.div`
  display: grid;

  @media screen and (min-width: 720px) {
    grid-template-columns: 180px 1fr;
  }
`

export default Title
