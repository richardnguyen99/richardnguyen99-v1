import styled from 'styled-components'

const MailTo = styled.a`
  height: 48px;
  padding: 0 1.5rem;
  border-radius: 4px;
  border: 1px solid var(--Theme-Body--Text);
  background: transparent;
  color: var(--Theme-Body--Text);
  transition: transform 0.2s ease-in-out;
  font-size: 1rem;
  line-height: 48px;
  text-transform: uppercase;

  margin-top: 1rem;

  display: inline-block;
  cursor: pointer;

  &:hover {
    background: var(--Theme-Body--Text);
    color: var(--Theme-Body--Background);
    transform: scale(0.9);
    box-shadow: var(--Theme-Section--BoxShadow);
  }
`

export default MailTo
