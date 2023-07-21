'use client'

import { styled } from 'styled-components'

export const LabelFilter = styled.label`
  display: inline-block;
  border: solid 2px #1c3c50;
  border-radius: 1.5rem;
  font-weight: 600;
  color: #1c3c50;
  padding: 0.5rem 1.5rem;

  &:hover {
    border: solid 2px #007eff;
    background-color: #ffffff;
    color: #007eff;    
  }
`

export const RadioFilter = styled.input`
  visibility: hidden;
  width: 0;

  &:checked + ${LabelFilter} {
    border: solid 2px #007eff;
    background-color: #007eff;
    color: #ffffff;
  }
`