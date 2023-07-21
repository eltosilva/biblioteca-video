import { MouseEventHandler } from 'react'
import { LabelFilter, RadioFilter } from './styles'
import { IProps } from '@/types/props'

export default function Filter({children, id, name, onClick}: IPropsFilter) {
  
  return (
    <>
      <RadioFilter type='radio' id={id} name={name} onClick={onClick} />
      <LabelFilter htmlFor={id} role='button'>{children}</LabelFilter>
    </>
  )
}

interface IPropsFilter extends IProps {
  id: string,
  name: string,
  onClick: MouseEventHandler<HTMLInputElement>,
}