import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Verifica o conteúdo do cabeçalho da página', () => {
  test('contém o link da home', () => {
    render(<Header />)

    const link = screen.queryByRole('link')
    
    expect(link).toHaveProperty('href', 'http://localhost/')
  })
})