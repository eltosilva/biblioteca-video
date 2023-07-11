import { IPropsFilter } from '@/types/props'
import { Container, ContainerOption } from './styles'
import Order from '../Order'

export default function Filter({ filters, children, onClick }: IPropsFilter) {


  return (
    <Container>
      <ul>
        {
          Array.from(filters)
            .sort((intemA, itemB) => intemA > itemB ? 1 : -1)
            .map((item, index) => (<Option key={item + index} value={item} nome="grupo-video" onClick={(value: string) => onClick(value)} />))
        }
      </ul>
      {children}
    </Container>
  )
}

function Option({ value, nome, onClick }: { value: string, nome: string, onClick: Function }) {
  const identificador = value.split(' ').join('')
  return (
    <ContainerOption>
      <input type="radio" name={nome} id={'opt-' + identificador} value={value} onClick={(event) => onClick(event.currentTarget.value)} />
      <label htmlFor={'opt-' + identificador}>{value}</label>
    </ContainerOption>
  )
}