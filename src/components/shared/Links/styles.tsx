'use client'

import { styled } from 'styled-components'
import { EnumColor } from '../Styles'
import { FileType } from '.'

export const RoundIcon = styled.a`
  background-color: ${EnumColor.LIGHT_GRAY};
  border-radius: 50%;
  padding: 1rem;
  font-size: 1.25rem;
`

export const DownloadSVG = styled.svg`
  height: 2.25rem;
  padding: 0.5rem;
  background-color: #9fefdf;
  fill: #00ae7f;
  stroke: #00ae7f;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`

export const DownloadText = styled.span`
  font-weight: 700;
  color: #00ae7f;
  padding: 0.5rem;
`
const colorDowload = [
  { //spreadsheet
    font: '#00ae7f',
    background: '#c2f4ea',
    svg: '#9fefdf'
  },
  { //document
    font: '#279bf1',
    background: '#a1d9ff',
    svg: '#c2e6ff'
  },
  { //presentation
    font: '#a99445',
    background: '#fff8d0',
    svg: '#fff1a0'
  },
  { //folder
    font: '#8f979f',
    background: '#e8eef3',
    svg: '#d0dee7'
  }
]

export const DownloadIcon = styled.a<{$fileType: FileType}>`
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${props => colorDowload[props.$fileType].background};

  ${DownloadSVG} {
    background-color: ${props => colorDowload[props.$fileType].svg};
    fill: ${props => colorDowload[props.$fileType].font};
    stroke: ${props => colorDowload[props.$fileType].font}
  }

  ${DownloadText} {
    color: ${props => colorDowload[props.$fileType].font}
  }
`