'use client'

import { styled } from 'styled-components'
import { Container } from '../Styles'

export const ContainerFilter = styled(Container)`
  display: flex;
  justify-content: space-between;

  `
export const ListFilter = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  list-style: none;
  padding: 1rem 0;
`

export const BoxFilter = styled.li`
  display: flex;
  
  input[type="radio"] {
    visibility: hidden;
    width: 0;
  }

  label {
    border: solid 2px #1c3c50;
    border-radius: 1.5rem;
    font-weight: 600;
    color: #1c3c50;
    padding: 0.5rem 1.5rem
  }

  input[type="radio"]:checked + label {
    border: solid 2px #007eff;
    background-color: #007eff;
    color: #ffffff;
  }

  label:hover, input[type="radio"]:checked + label:hover {
    border: solid 2px #007eff;
    background-color: #ffffff;
    color: #007eff;
  }
`