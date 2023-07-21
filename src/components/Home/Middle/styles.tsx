'use client'

import { Container } from '@/components/shared/Styles'
import { styled } from 'styled-components'

export const ContainerMiddle = styled(Container)`
  display: flex;
  flex-direction: column;
`

export const ToolBar = styled.div`
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