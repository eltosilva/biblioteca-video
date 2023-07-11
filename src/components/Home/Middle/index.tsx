'use client'

import { useRef, useState } from 'react';
import Filter from '../../shared/Filter';
import { ContainerMiddle } from './styles';
import {listaDeVideos} from '@/dados'
import Pagination from '@/components/shared/Pagination';
import Order from '@/components/shared/Order';
import { Row } from '@/components/shared/Styles';

let temas = new Set(listaDeVideos.map(item => item.tema))

export default function Middle(){

  const [list, setList] = useState(listaDeVideos)
  const fnClick = (filter: string) => setList(listaDeVideos.filter(video => video.tema == filter))

  return(
    <Row>
      <ContainerMiddle>
        <Filter filters={temas} onClick={fnClick}>
          <Order />
        </Filter>
        <Pagination list={list} sizePage={9} />
      </ContainerMiddle>
    </Row>
  )
}