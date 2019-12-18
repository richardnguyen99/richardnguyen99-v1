import styled from 'styled-components'

import Section from './Section'

const SectionMain = styled(Section)`
  position: relative;
  margin-top: -2.5rem;
  margin-right: 2rem;
  margin-bottom: 0rem;
  margin-left: 2rem;
  background: var(--Theme-Section--Background);
  border-radius: 4px;

  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.405);

  @media screen and (max-width: 992px) {
    margin-right: 1rem;
    margin-left: 1rem;
  }
`

export default SectionMain
