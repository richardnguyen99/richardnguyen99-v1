import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  min-height: 0;
  align-items: center;

  background-color: var(--Theme-Card--Background);
  background-clip: border-box;
  color: var(--Theme-Body--Text);
  border-radius: 4px;
  border: var(--Theme-Card--Border);

  padding-top: 0.5rem;
  padding-right: 1.25rem;
  padding-bottom: 0.5rem;
  padding-left: 1.25rem;

  > hr {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .gatsby-image-wrapper {
    margin-top: 1rem;
  }
`

export default Card
