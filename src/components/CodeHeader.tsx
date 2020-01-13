import React from 'react'
import styled from 'styled-components'

interface CircleProps {
  color: string
}

const Circle = styled.span<CircleProps>`
  background: ${(props): string => props.color};
  border-radius: 50%;
  display: inline-block;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  height: 24px;

  margin-top: auto;
  margin-bottom: auto;

  > ${Circle} {
    margin-right: 0.5rem;
    width: 13px;
    height: 13px;
  }
`

const StyledCodeHeader = styled.div`
  display: flex;

  margin-top: 0.5rem;
  padding: 0.5rem;

  background: #030303;
  color: #fff;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

interface CoderHeaderProps {
  children?: React.ReactChild | React.ReactChild[]
}

const CodeHeader: React.FC<CoderHeaderProps> = ({ children }) => (
  <StyledCodeHeader>
    <ButtonGroup>
      <Circle color="rgb(255, 45, 85)" />
      <Circle color="rgb(255, 204, 0)" />
      <Circle color="rgb(40, 205, 65)" />
    </ButtonGroup>
    <div style={{ marginRight: 'auto', marginLeft: 'auto'}}>
      {children}
    </div>
  </StyledCodeHeader>
)

export default CodeHeader
