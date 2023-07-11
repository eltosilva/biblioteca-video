'use client'

import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    align-items: center;

    img {
      margin: 1rem;
    }
  }
`

export const ChatButton = styled.button`
  width: 16.375rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: #0083ff;
  color: white;
  font-weight: 600;
  cursor: pointer;
`