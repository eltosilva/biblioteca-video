'use client'

import { useState } from 'react';
import Filter from '../../shared/Filter';
import { Container } from './styles';
import {listaDeVideos} from '@/dados'
import Pagination from '@/components/shared/Pagination';
import Order from '@/components/shared/Order';

let temas = new Set(listaDeVideos.map(item => item.tema))

export default function Middle(){

  const [list, setList] = useState(listaDeVideos)
  const fnClick = (filter: string) => setList(listaDeVideos.filter(video => video.tema == filter))

  return(
    <section>
      <Container>
        <Filter filters={temas} onClick={fnClick}>
          <Order />
        </Filter>
        <Pagination list={list} sizePage={9} />
      </Container>
    </section>
  )
}