import { Container } from './styles';

export default function Order() {
  return (
    <Container>
      <label htmlFor="">Ordenar Por</label>
      <select>
        <option value="">Selecione..</option>
        <option value="a">A - Z</option>
        <option value="b">Z - A</option>
      </select>
    </Container>
  )
}