'use client'

import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  img {
    width: 10%
  }
`

export default () => {
  return (
    <Header>
      <img src='/logo.png' alt='logo marca da leadster' />
    </Header>
  )
}