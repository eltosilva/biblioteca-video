'use client'

import { styled } from 'styled-components'

export const Container = styled.div`
    width: auto !important;
    display: flex;
    align-items: center;
    font-size: 1.125rem;

    label {
      font-weight: 600;
    }

    select {
      padding: 0.5rem;
      background-color: #ffffff;
      border-radius: 0.5rem;
      width: 12rem;
      font-size: 1.125rem;
      margin-left: 1rem;
    }
`