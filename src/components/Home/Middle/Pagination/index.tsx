import Card from './Card';
import { ContainerPagination, DashBoard } from './styles';
import NavBar from './NavBar';
import { useState } from 'react';
import { IVideo } from '@/dados';

export default function Pagination({ list, sizePage }: IPropsPagination) {

  const [page, setPage] = useState(0)

  const quantPage = Math.floor(list.length / sizePage) + (list.length % sizePage > 0 ? 1 : 0)
  const start = page * sizePage
  const end = start + sizePage
  
  return (
    <ContainerPagination>
      <DashBoard>
        {
          list.slice(start, end)
            .map((item, index) => (<Card key={index} value={item} />))
        }
      </DashBoard>
      <NavBar page={page} size={quantPage} onClick={(newPage) => setPage(newPage)} />
    </ContainerPagination>
  )
}

export interface IPropsPagination {
  list: Array<IVideo>,
  sizePage: number
}

interface IValuePagination {
  url: string,
  srcImage: string,
  title: string
}