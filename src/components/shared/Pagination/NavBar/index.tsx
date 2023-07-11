import { Button, Buttons, Container } from './styles';

export default function NavBar({ page, size, onClick }: IPropsPagination) {

  let start = page - 2
  start = start >= 0 ? start : 0

  let end = start + 5
  end = end > size ? size : end

  const numbers = []
  for (let i = start; i < end; i++)
    numbers.push(i)

  return (
    <Container>
      <span>Página</span>
      <Buttons>
        {
          numbers.map(number => (
            <Button key={number}>
              <input type='radio' name='pagination' id={'radio' + number} onClick={() => onClick(number)} />
              <label htmlFor={'radio' + number}>{number + 1}</label>
            </Button>
          )
          )
        }
      </Buttons>
    </Container>
  )
}

interface IPropsPagination {
  page: number,
  size: number,
  onClick: (newPage: number) => void
}