'use client'

import styled from 'styled-components'

export const Row = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1320px;
`

export enum EnumColor {
  BLUE = '#007dff',
  GRAY = '#677294',
  LIGHT_GRAY = '#ebeef5',
  PURPLE = '#f0f8ff'
}