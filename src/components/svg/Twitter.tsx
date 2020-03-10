import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: inherit;
  height: inherit;
`

interface Props {
  id?: string
  mode: string
  defaultLight?: boolean
}

const Twitter: React.FC<Props> = ({ id, mode, defaultLight }) => (
  <Svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.53 24">
    <title>Twitter-24_1</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{
            fill: mode === 'dark' ? '#d7dadc' : '#222222',
          }}
          d="M29.47,2.86a12.3,12.3,0,0,1-3.47,1A6.13,6.13,0,0,0,28.66.46a12.68,12.68,0,0,1-3.85,1.46A6,6,0,0,0,14.34,6.05a6.21,6.21,0,0,0,.15,1.38A17.14,17.14,0,0,1,2,1.13a5.86,5.86,0,0,0-.82,3,6.07,6.07,0,0,0,2.69,5,5.91,5.91,0,0,1-2.74-.76v.08A6.06,6.06,0,0,0,6,14.47a6.35,6.35,0,0,1-1.59.21,6,6,0,0,1-1.13-.11A6.07,6.07,0,0,0,9,18.77a12.11,12.11,0,0,1-7.51,2.59A11.58,11.58,0,0,1,0,21.28,17.18,17.18,0,0,0,9.3,24c11.14,0,17.22-9.22,17.22-17.21,0-.25,0-.51,0-.77a12.23,12.23,0,0,0,3-3.14Z"
        />
      </g>
    </g>
  </Svg>
)

export default Twitter
