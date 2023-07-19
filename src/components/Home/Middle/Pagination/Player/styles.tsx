'use client'

import { EnumColor } from '@/components/shared/Styles'
import { styled } from 'styled-components'

export const Title = styled.h2`
  padding: 2rem 4rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
`

export const IFrame = styled.iframe`
  height: 100%;
  border: none;
`

export const Bottom = styled.div`
  padding: 1.5rem;
`

export const H3 = styled.h3`
  text-align: left;
  padding: 0.5rem 0;
  border-bottom: solid 4px ${EnumColor.LIGHT_GRAY}
`

export const Description = styled.p`
  text-align: justify;
  padding: 0.5rem 0;
`

export const DownloadContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`