import React from 'react'

interface ModeProps {
  mode: string
}

const AbstractCircle: React.FC<ModeProps> = ({ mode }) => {
  const color: string = mode === 'light' ? '#222222' : '#d7dadc'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 110">
      <title>Abstract Square Dot</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle fill={color} cx="7" cy="5" r="2" />
          <circle fill={color} cx="32" cy="5" r="2" />
          <circle fill={color} cx="57" cy="5" r="2" />
          <circle fill={color} cx="82" cy="5" r="2" />
          <circle fill={color} cx="107" cy="5" r="2" />
          <circle fill={color} cx="7" cy="30" r="2" />
          <circle fill={color} cx="32" cy="30" r="2" />
          <circle fill={color} cx="57" cy="30" r="2" />
          <circle fill={color} cx="82" cy="30" r="2" />
          <circle fill={color} cx="107" cy="30" r="2" />
          <circle fill={color} cx="6" cy="55" r="2" />
          <circle fill={color} cx="31" cy="55" r="2" />
          <circle fill={color} cx="56" cy="55" r="2" />
          <circle fill={color} cx="81" cy="55" r="2" />
          <circle fill={color} cx="106" cy="55" r="2" />
          <circle fill={color} cx="6" cy="80" r="2" />
          <circle fill={color} cx="31" cy="80" r="2" />
          <circle fill={color} cx="56" cy="80" r="2" />
          <circle fill={color} cx="81" cy="80" r="2" />
          <circle fill={color} cx="106" cy="80" r="2" />
          <circle fill={color} cx="5" cy="105" r="2" />
          <circle fill={color} cx="30" cy="105" r="2" />
          <circle fill={color} cx="55" cy="105" r="2" />
          <circle fill={color} cx="80" cy="105" r="2" />
          <circle fill={color} cx="105" cy="105" r="2" />
        </g>
      </g>
    </svg>
  )
}
export default AbstractCircle
