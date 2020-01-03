/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type MediaQueryObject = {
  [key: string]: string | number | boolean
}

// Create a mock object to store information
// on a media query applied to a document.
// This can be created by using `window.matchMedia`.
const mockMediaQueryObject: MediaQueryList = {
  media: '',
  matches: false,
  onchange: () => {},
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
}

const queryToString = (query: string | MediaQueryObject): string => {
  if (typeof query === 'string') {
    return query
  }

  return Object.entries(query)
    .map(([key, value]): string => {
      const convertedKey = key
        .replace(/[A-Z]/g, string => `-${string.toLowerCase()}`)
        .toLowerCase()

      let convertedValue = value

      if (typeof value === 'boolean') {
        return value ? convertedKey : `not ${convertedKey}`
      }

      if (typeof value === 'number' && /[height|width]$/.test(convertedKey)) {
        convertedValue = `${convertedValue}px`
      }

      return `(${convertedKey}: ${convertedValue})`
    })
    .join(' and ')
}

/** A custom hook to track media query.
 *
 * @param {string | MediaQueryObject} rawQuery Pass media query to check.
 * @param {boolean} defaultState Default state to apply default value (false).
 * @return {[boolean, Dispatch<SetStateAction<boolean>>]}
 */
const useMediaHooks = (
  rawQuery: string | MediaQueryObject,
  defaultState = false
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  // Create a boolean state, which to check if
  // window size matched media query
  const [state, setState] = useState<boolean>(defaultState)

  // Convert raw query to string, so that can be
  // used in `window.matchMedia`
  const convertedQuery = queryToString(rawQuery)

  useEffect(() => {
    let mounted = true
    const mediaQueryObject: MediaQueryList =
      // Support server-side renderring
      typeof window === 'undefined'
        ? mockMediaQueryObject
        : // Return a `MediaQueryList` object
          // if matched with `rawQuery`
          window.matchMedia(convertedQuery)

    // Callback function
    const onChange = (): void => {
      if (!mounted) {
        return
      }

      setState(Boolean(mediaQueryObject.matches))
    }

    // Update state when window width change
    mediaQueryObject.addListener(onChange)
    setState(mediaQueryObject.matches)

    return (): void => {
      mounted = false
      mediaQueryObject.removeListener(onChange)
    }
  }, [convertedQuery])

  return [state, setState]
}

export default useMediaHooks
