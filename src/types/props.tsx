import { ReactNode } from 'react';

export interface IProps {
  children?: ReactNode
}

export interface IPropsFilter extends IProps {
  filters: Set<string>,
  onClick: (list: string) => void
}

export interface IPropsPagination {
  list: Array<IVideo>,
  sizePage: number
}

export interface IVideo {
  url: string,
  image: string,
  title: string,
  tema: string
}