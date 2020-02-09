import styled from 'styled-components'

import { media } from '@styles'

const Heading = styled.h3`
  position: relative;
  display: flex;
  align-items: center;

  margin-bottom: 2.5rem;
  width: 100%;
  white-space: nowrap;

  font-size: 1rem;

  color: var(--Theme-Body__Text);

  ${media.lg`font-size: 1.5rem;`}

  &:before {
    counter-increment: section;
    content: '0' counter(section) '.';

    margin-right: 0.75rem;

    font-size: 0.75rem;
    font-family: var(--Theme-Body__Font--monospace);
    font-weight: normal;
    color: var(--Theme-Body__Text);

    ${media.lg`font-size: 1.25rem;`}
  }

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: var(--Theme-Section--postLine);
    position: relative;
    top: 2px;

    margin-left: 20px;

    ${media.lg`width: 20rem;`}
  }
`

export default Heading
