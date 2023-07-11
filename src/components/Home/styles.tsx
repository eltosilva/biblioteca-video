'use client'

import { styled } from 'styled-components'
import { EnumColor, Row } from '../shared/Styles'

export const Main = styled.main`

  h2 {
    font-size: 2.375rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    strong {
      font-weight: 700;
    }
  }

  h3 {
    font-weight: 600;
    margin: 1.5rem 0;
  }

  hr {
    width: 100%;
    color: #c8d4dd;
    margin: 1rem 0;
  }
`

export const PurpleRow = styled(Row)`
  background-color: ${EnumColor.PURPLE};
`