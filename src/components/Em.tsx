import styled from 'styled-components'

interface EmProps {
  top: number
  bottom: number
  spacing: number
  color: string
  background: string
}

const Em = styled.em<EmProps>`
  color: ${(props): string => props.color};
  font-style: normal;
  display: inline-block;

  position: relative;
  letter-spacing: 0px;
  z-index: 1;
  transition: all 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    top: ${(props): number => props.top}em;
    bottom: ${(props): number => props.bottom}em;
    z-index: -3;
    background: ${(props): string => props.background};
    transform: rotateZ(-0.8deg);
    transition: all 0.3s ease-out;
  }

  &:hover {
    letter-spacing: ${(props): number => props.spacing}px;

    &::before {
      left: 100%;
    }
  }
`

export default Em
