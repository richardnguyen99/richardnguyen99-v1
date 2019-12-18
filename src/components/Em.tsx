import styled from 'styled-components'

interface EmProps {
  color: string
  background: string
}

const Em = styled.em<EmProps>`
  color: ${(props): string => props.color};
  font-style: normal;

  position: relative;
  letter-spacing: 0px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    top: 0.45em;
    bottom: 0.15em;
    z-index: -3;
    background: ${(props): string => props.background};
    transform: rotateZ(-0.5deg);
  }
`

export default Em
