'use client'

import Filter, { ComparatorFilter } from '@/components/shared/Filter';
import { ContainerMiddle, ToolBar } from './styles';
import { Row } from '@/components/shared/Styles';
import { IVideo, ThemeComparator, videos } from '@/dados'
import { useState } from 'react';
import Stage from '@/components/shared/Stage';

const themes = extractThemes()

export default function Middle() {

  const [list, setList] = useState(videos)

  return (
    <Row>
      <ContainerMiddle>
        <ToolBar>
          <Filter name='filter-videos' originalList={videos} comparatorList={extractThemes()} setStatus={setList} />
          <Stage />
        </ToolBar>
        <div>
          {list.map(item => (<p key={item.title}>{item.title}</p>))}
        </div>
      </ContainerMiddle>
    </Row>
  )
}

function extractThemes() {
    
  const comparators = [] as ComparatorFilter<IVideo>[]

  for (let video of videos){
    const have = comparators.some( comparator => comparator.label === video.theme)

    if(!have)
      comparators.push(new ThemeComparator(video.theme))
  }

  return comparators

}
