'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ffffff;
  }

  div {
    padding: 1rem 0;
  }
`

export default GlobalStyles