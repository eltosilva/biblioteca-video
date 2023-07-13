import { ChangeEvent, Dispatch, SetStateAction } from 'react';
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
      <SelectStage onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        const index = parseInt(event.target.value)
        const newList = [...organizers[index].sort(list)]

        setList(newList)
      }}>
        <option value="">Selecione..</option>
        {organizers.map((organizer, index) => (
          <option key={index} value={index}>{organizer.label}</option>
        ))}
      </SelectStage>
    </ContainerStage>
  )
}
