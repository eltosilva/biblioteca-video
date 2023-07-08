import Header from '@/components/Header'
import { render } from '@testing-library/react'

describe('Header', () => {
  it('Verifica se a imagem da logo possui um texto alternativo', () => {
    const {getAllByAltText} = render(<Header />)

    expect(getAllByAltText(/\w+/i)).toBeTruthy()
  })
})