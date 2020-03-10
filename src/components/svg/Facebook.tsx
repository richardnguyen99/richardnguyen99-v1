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
  defaultDark?: boolean
}

const Facebook: React.FC<Props> = ({ id, mode, defaultLight }) => (
  <Svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="24"
    width="24"
  >
    <title>Facebook-24</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{
            fill: mode === 'dark' ? '#d7dadc' : '#222222',
          }}
          d="M24.15,12.07A12.08,12.08,0,1,0,10.19,24V15.56H7.12V12.07h3.07V9.41c0-3,1.8-4.69,4.56-4.69a19,19,0,0,1,2.7.23v3H15.93a1.75,1.75,0,0,0-2,1.89v2.26h3.35l-.54,3.49H14V24A12.08,12.08,0,0,0,24.15,12.07Z"
        />
      </g>
    </g>
  </Svg>
)

export default Facebook
