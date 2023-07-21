import { Dispatch, SetStateAction } from 'react';
import { ContainerStage, LabelStage, SelectStage } from './styles';

export interface IPropsStage<T> {
  input: [T[], Dispatch<SetStateAction<T[]>>]
  organizers: Organizer<T>[]
}

export interface Organizer<T> {
  label: string,
  sort(object: T[]): T[]
}

export default function Stage<T>({organizers, input}: IPropsStage<T>) {
  
  const [list, setList] = input
  
  return (
    <ContainerStage>
      <LabelStage htmlFor="">Ordenar Por</LabelStage>
      <SelectStage >
        {organizers.map((organizer, index) => (
          <option key={index} value={index} onClick={() => setList([...organizer.sort(list)]) } >{organizer.label}</option>
        ))}
      </SelectStage>
    </ContainerStage>
  )
}
