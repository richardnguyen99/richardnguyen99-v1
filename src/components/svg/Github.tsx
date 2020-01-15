import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: inherit;
  height: inherit;
`

interface Props {
  mode: string
}

const Github: React.FC<Props> = ({ mode }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.61 24">
    <title>Github-24_3</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ background: mode === 'dark' ? '#d7dadc' : '#ffffff' }}
          d="M12.3,0A12.31,12.31,0,0,0,8.41,24c.62.11.84-.27.84-.59s0-1.07,0-2.09c-3.42.74-4.15-1.66-4.15-1.66a3.28,3.28,0,0,0-1.36-1.8c-1.12-.76.08-.74.08-.74A2.57,2.57,0,0,1,5.7,18.36a2.62,2.62,0,0,0,3.58,1,2.64,2.64,0,0,1,.78-1.65c-2.73-.31-5.61-1.36-5.61-6.08a4.75,4.75,0,0,1,1.27-3.3A4.39,4.39,0,0,1,5.83,5.1s1-.33,3.38,1.26a11.74,11.74,0,0,1,6.15,0C17.7,4.77,18.73,5.1,18.73,5.1a4.55,4.55,0,0,1,.13,3.26,4.78,4.78,0,0,1,1.26,3.3c0,4.73-2.88,5.77-5.62,6.07A3,3,0,0,1,15.33,20c0,1.65,0,3,0,3.37s.21.71.84.58A12.29,12.29,0,0,0,12.3,0"
        />
      </g>
    </g>
  </Svg>
)

export default Github
