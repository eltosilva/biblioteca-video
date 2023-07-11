import { IPropsPagination } from '@/types/props';

import Card from '../Card';
import { Container, DashBoard } from './styles';
import NavBar from './NavBar';
import { useState } from 'react';

export default function Pagination({ list, sizePage }: IPropsPagination) {

  const [page, setPage] = useState(0)

  const quantPage = Math.floor(list.length / sizePage) + (list.length % sizePage > 0 ? 1 : 0)
  const start = page * sizePage
  const end = start + sizePage
  return (
    <Container>
      <DashBoard>
        {
          list.slice(start, end)
            .map((item, index) => (<Card key={index} value={item} />))
        }
      </DashBoard>
      <NavBar page={page} size={quantPage} onClick={(newPage) => setPage(newPage)} />
    </Container>
  )
}
