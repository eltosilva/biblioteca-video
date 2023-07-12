import { Dispatch, SetStateAction } from 'react'
import { BoxFilter, ContainerFilter, ListFilter } from './styles'

export default function Filter<S extends Selectable, C extends Comparable>({ name, originalList, comparableList, setStatus }: IPropsFilter<S, C>) {

  return (
    <ContainerFilter>
      <ListFilter>
        {comparableList.map((comparable, index) => {
          const fn = filterFactory<S>(comparable)

          return (
            <BoxFilter>
              <input type='radio' id={name + index} name={name} onChange={() => setStatus(fn(originalList))} />
              <label htmlFor={name + index}>{comparable.description}</label>
            </BoxFilter>
          )
        })}
      </ListFilter>
    </ContainerFilter>
  )
}

interface IPropsFilter<S extends Selectable, C extends Comparable> {
  originalList: S[],
  comparableList: C[],
  setStatus: Dispatch<SetStateAction<S[]>>,
  name: string
}

//Dispatch<SetStateAction<V[]>>
export interface Comparable {
  description: string
  equals(object: Comparable): boolean
}

export interface Selectable {
  select(object: Comparable): boolean
}

export function filterFactory<T extends Selectable>(standard: Comparable) {
  return (objects: T[]) => {
    return objects.filter(object => object.select(standard))
  }
}
