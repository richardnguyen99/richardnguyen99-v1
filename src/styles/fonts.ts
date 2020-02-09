import { css } from 'styled-components'

import SFMonoMediumTTF from '@fonts/SFMono/SFMono-Medium.ttf'
import SFMonoMediumWOFF from '@fonts/SFMono/SFMono-Medium.woff'
import SFMonoMediumWOFF2 from '@fonts/SFMono/SFMono-Medium.woff2'
import SFMonoMediumItalicTTF from '@fonts/SFMono/SFMono-MediumItalic.ttf'
import SFMonoMediumItalicWOFF from '@fonts/SFMono/SFMono-MediumItalic.woff'
import SFMonoMediumItalicWOFF2 from '@fonts/SFMono/SFMono-Regular.woff2'
import SFMonoRegularTTF from '@fonts/SFMono/SFMono-Regular.ttf'
import SFMonoRegularWOFF from '@fonts/SFMono/SFMono-Regular.woff'
import SFMonoRegularWOFF2 from '@fonts/SFMono/SFMono-Regular.woff2'
import SFMonoRegularItalicTTF from '@fonts/SFMono/SFMono-RegularItalic.ttf'
import SFMonoRegularItalicWOFF from '@fonts/SFMono/SFMono-RegularItalic.woff'
import SFMonoRegularItalicWOFF2 from '@fonts/SFMono/SFMono-RegularItalic.woff2'
import SFMonoSemiboldTTF from '@fonts/SFMono/SFMono-Semibold.ttf'
import SFMonoSemiboldWOFF from '@fonts/SFMono/SFMono-Semibold.woff'
import SFMonoSemiboldWOFF2 from '@fonts/SFMono/SFMono-Semibold.woff2'
import SFMonoSemiboldItalicTTF from '@fonts/SFMono/SFMono-SemiboldItalic.ttf'
import SFMonoSemiboldItalicWOFF from '@fonts/SFMono/SFMono-SemiboldItalic.woff'
import SFMonoSemiboldItalicWOFF2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2'

const FontFaces = css`
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularWOFF2}) format('woff2'),
      url(${SFMonoRegularWOFF}) format('woff'),
      url(${SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoRegularItalicWOFF2}) format('woff2'),
      url(${SFMonoRegularItalicWOFF}) format('woff'),
      url(${SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumWOFF2}) format('woff2'),
      url(${SFMonoMediumWOFF}) format('woff'),
      url(${SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoMediumItalicWOFF2}) format('woff2'),
      url(${SFMonoMediumItalicWOFF}) format('woff'),
      url(${SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldWOFF2}) format('woff2'),
      url(${SFMonoSemiboldWOFF}) format('woff'),
      url(${SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${SFMonoSemiboldItalicWOFF2}) format('woff2'),
      url(${SFMonoSemiboldItalicWOFF}) format('woff'),
      url(${SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`

export default FontFaces
