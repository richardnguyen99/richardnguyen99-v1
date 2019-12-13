import 'styled-components'

import { ThemeMode } from '../types'

declare module 'styled-components' {
  interface DefaultTheme {
    mode: ThemeMode
  }
}
