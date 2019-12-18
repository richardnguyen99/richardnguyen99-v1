import styled from 'styled-components'

const Cross = styled.div`
  background: var(--Theme-Body--Text);
  height: 100px;
  position: absolute;
  width: 20px;
  opacity: 0.3;

  &::after {
    background: var(--Theme-Body--Text);
    content: '';
    height: 20px;
    left: -40px;
    position: absolute;
    top: 40px;
    width: 100px;
  }
`

export default Cross
