import { Dispatch, SetStateAction } from 'react'
import { LabelFilter, ListFilter, RadioFilter } from './styles'

export default function Filter<S, C extends ComparatorFilter<S>>({ name, originalList, comparatorList, setStatus }: IPropsFilter<S, C>) {

  return (
    <ListFilter>
      {comparatorList.map((comparator, index) => {
        const fn = filterFactory<S>(comparator)

        return (
          <li key={name + index}>
            <RadioFilter type='radio' id={name + index} name={name} onChange={() => setStatus(fn(originalList))} />
            <LabelFilter htmlFor={name + index}>{comparator.label}</LabelFilter>
          </li>
        )
      })}
    </ListFilter>
  )
}

interface IPropsFilter<S, C extends ComparatorFilter<S>> {
  originalList: S[],
  comparatorList: C[],
  setStatus: Dispatch<SetStateAction<S[]>>,
  name: string
}

export interface ComparatorFilter<T> {
  label: string,
  compareTo(object: T): boolean
}

function filterFactory<T>(standard: ComparatorFilter<T>) {
  return (objects: T[]) => {
    return objects.filter(object => standard.compareTo(object))
  }
}
