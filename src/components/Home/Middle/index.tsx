'use client'

import Filter, { Comparable, filterFactory } from '@/components/shared/Filter';
import { ContainerMiddle } from './styles';
import { Row } from '@/components/shared/Styles';
import { Theme, Video, videos } from '@/dados'
import { useState } from 'react';

const themes = extractThemes()

export default function Middle() {

  const [list, setList] = useState(videos)

  return (
    <Row>
      <ContainerMiddle>
        <div>
          {Filter<Video, Theme>({name: 'filter-videos',originalList: videos, comparableList: extractThemes(), setStatus: setList})}
        </div>
        <div>
          {list.map(item => (<p>{item.title}</p>))}
        </div>
      </ContainerMiddle>
    </Row>
  )
}

function extractThemes() {

  const themes = [] as Theme[]

  for (let video of videos) {
    const have = themes.some(theme => theme.equals(video.theme))

    if (!have)
      themes.push(video.theme)
  }

  return themes
}

/**
<Row>
  <ContainerMiddle>
    <Filter filters={temas} onClick={fnClick}>
      <Order />
    </Filter>
    <Pagination list={list} sizePage={9} />
  </ContainerMiddle>
</Row>
 */