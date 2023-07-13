import { Container } from './styles';

export default function Stage() {
  let c: Organizeable = new Filha()


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

export enum EnumOrder {
  ASC,
  DESC
}

export class Organizeable {
  static valorEstatico: string = 'Classe Organizable'
}

class Filha extends Organizeable {
  static valorEstatico: string = 'Classe Filha'
}

