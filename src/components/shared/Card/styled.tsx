'use client'

import { styled } from 'styled-components'

export const PlayerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  visibility: hidden;

  svg {
    height: 100%;
  }
`

export const Container = styled.div`
  box-shadow: 0.3rem 0.2rem 1.5rem #edeff1;
  border-radius: 2rem;
  cursor: pointer;
  
  &:hover {
    ${PlayerImage} {
      visibility: visible;
    }

    h3 {
      color: #007eff;
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