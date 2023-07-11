'use client'

import { styled } from 'styled-components'

export const Main = styled.main`
  margin-top: 5.75rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
  }

  div {
    width: 100%;
    max-width: 1380px;
  }

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

export const PurpleSection = styled.section`
  background-color: #f0f8ff;
`