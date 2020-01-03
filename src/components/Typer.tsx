/**
 * @todo Switch `Typer` component to `Terminal` component
 * @todo Write the documentation and implement `Terminal`
 * component as a real terminal
 */
import React from 'react'
import styled from 'styled-components'

interface TyperProps {
  dataText: string[]
  title?: string
}

/**
 * Apply styles for Typer component
 *
 * Do not modify Typer's styles inside itself
 */
const StyledTyper = styled.h3`
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.75rem;
  font-weight: 400;
  height: 100%;
  margin: 0;
  display: inline-block;
  position: relative;

  @media screen and (max-width: 576px) {
    font-size: 1.25rem;
  }
`

const Typer: React.FC<TyperProps> = ({ dataText, title = '' }) => {
  // Create a text state to store letters temporarily.
  // E.g: 'Py' -> 'Pyt' -> 'Pyth'
  const [text, setText] = React.useState<string>('')

  // Create a boolean state to tell component when to delete.
  const [deleting, setDeleting] = React.useState<boolean>(false)

  // Create an infinite loop to repeat the typing process.
  const [loop, setLoop] = React.useState<number>(0)

  // Create a numeric state to modify the speed of typing and deleting.
  const [speed, setSpeed] = React.useState<number>(150)

  // This will create indices to access `dataText` items
  // Eg: 0 % 3 -> dataText[0], 1 % 3 -> dataText[1]
  //     2 % 3 -> dateText[2], 3 % 3 -> dataTet[0]
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

    // Deleting speed is faster than typing one
    setSpeed(deleting ? 30 : 150)

    if (!deleting && text === fullText) {
      // Wait for a little bit before set 'deleting' to `true`
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

    // This effect needs cleanup action
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
