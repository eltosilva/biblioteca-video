'use client'

import { styled } from 'styled-components'
import { EnumColor } from '../Styles'

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #081f187c;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  `
  
  export const ContentModal = styled.div<{$width: string, $height: string}>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 1rem;
  border-top: solid 0.25rem ${EnumColor.BLUE};
  width: ${props => !!props.$width && props.$width};
  height: ${props => !!props.$height && props.$height};
`

export const Exit = styled.button<{$marginLeft: string}>`
  position: absolute;
  margin-left: calc(${props => !!props.$marginLeft && props.$marginLeft} - 1.5rem );
  font-size: 1.5rem;
  padding: 0.25rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
