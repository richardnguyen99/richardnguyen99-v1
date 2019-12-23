import React from 'react'
import styled from 'styled-components'

interface TyperProps {
  dataText: string[]
  title?: string
}

const StyledTyper = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  height: 100%;
  margin: 0;
  display: inline-block;
  position: relative;

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`

const Typer: React.FC<TyperProps> = ({ dataText, title = '' }) => {
  const [text, setText] = React.useState<string>('')
  const [deleting, setDeleting] = React.useState<boolean>(false)
  const [loop, setLoop] = React.useState<number>(0)
  const [speed, setSpeed] = React.useState<number>(150)

  const i: number = loop % dataText.length
  const fullText: string = dataText[i]

  // Type processing goes here.
  const handleTyping = (): void => {
    // Copy characters from the text taken from array (dataText).
    setText(
      deleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    )

    setSpeed(deleting ? 30 : 150)

    if (!deleting && text === fullText) {
      setTimeout(() => {
        setDeleting(true)
      }, 500)
    } else if (deleting && text === '') {
      setDeleting(false)
      setLoop(loop + 1)
    }
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, speed)

    return (): void => clearTimeout(timer)
  })

  return (
    <StyledTyper>
      I write&nbsp;
      {title}
      {text}
    </StyledTyper>
  )
}

export default Typer
