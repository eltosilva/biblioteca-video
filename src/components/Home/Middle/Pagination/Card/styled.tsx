'use client'

import { styled } from 'styled-components'
import { EnumColor } from '../../../../shared/Styles'

export const PlayerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  visibility: hidden;

  svg {
    height: 80%;
  }
`

export const Container = styled.button`
  box-shadow: 0.5rem 0.75rem 2rem ${EnumColor.GRAY};
  border: none;
  border-radius: 2rem;
  background-color: #ffffff;
  cursor: pointer;
  text-align: left;
  
  &:hover {
    ${PlayerImage} {
      visibility: visible;
    }

    h3 {
      color: ${EnumColor.BLUE};
    }

    img {
      filter: brightness(50%);
      visibility: visible;
    }

  }
`

export const CardImage = styled.div`
  position: relative;

  img {
    width: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`

export const CardTitle = styled.div`
  padding: 1.5rem;

  h3 {
    margin: 0;
    font-weight: 700;
  }
`