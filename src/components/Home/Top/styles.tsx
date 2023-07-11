'use client'

import { Container } from '@/components/shared/Styles'
import { styled } from 'styled-components'

export const ContainerTop = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  p {
    border-top: solid 1px #c8d4dd;
    padding: 0.5rem 2rem;
  }

  a {
    color: #007eff;
    border: solid 4px #007eff;
    text-decoration: none;
    font-weight: 700;
    line-height: 1.5;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    border-bottom-left-radius: 0;
    transition: all 0.3s ease-in-out;

    &:active {
      color: #ffffff;
      background-color: #007eff;
    }
  }
`

export const Title = styled.h1`
  max-width: 38rem;
  text-align: center;

  span {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 2rem;
  }

  strong {
    font-size: 4.7rem;
    color: #0084ff;
  }

  img {
    position: absolute;
    margin-left: 30.5rem;
    margin-top: 3.5rem;
  }
`