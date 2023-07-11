'use client'

import { styled } from 'styled-components'
import { Container, EnumColor, Row } from '../shared/Styles'

export const StyleFooter = styled.footer`
  background-color: #fbfbfd;

  ${Row} {
    padding: 2.25rem 0;
    border-top: solid 1px #e9ecf3;
  }
`

export const ContainerTop = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  img {
    height: 3.875rem;
  }
  
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${EnumColor.GRAY};
  }
`

export const ContainerBottom = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #2c3e50;
  }

  ul {
    margin-top: 1rem;
    list-style: none;
  }

  li {
    line-height: 2.5rem;
  }

  a {
    text-decoration: none;
    color: ${EnumColor.GRAY};
  }
`

export const SocialNetwork = styled.div`
  display: flex;
  gap: 1rem;
`

export const Contacts = styled(SocialNetwork)`
  flex-direction: column;
`