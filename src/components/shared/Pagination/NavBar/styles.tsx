'use client'

import { styled } from 'styled-components'

export const Container = styled.nav`
  border-top: solid 4px #d5dbde;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;

  span {
    font-size: 1.25rem;
    padding: 0.5rem;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto !important;
`

export const Button = styled.div`
  display: flex;
  width: auto !important;

  input[type="radio"]:checked + label {
    border: solid 2px #007eff;
    border-radius: 0.5rem;
    font-weight: 600;
  }

  input {
    visibility: hidden;
    width: 0;
  }

  label {
    padding: 0.25rem 0.5rem;
    font-size: 1.25rem;
  }
`