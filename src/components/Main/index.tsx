import { IProps } from '@/types/props';
import { StyleMain } from './styles';

export default function Main({ children }: IProps) {

  return (
    <StyleMain>
      {children}
    </StyleMain>
  )
}