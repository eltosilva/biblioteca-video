'use client'

import { styled } from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;
`

export const DashBoard = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
`