'use client'

import Filter from '@/components/shared/Filter';
import { ContainerMiddle, ListFilter, ToolBar } from './styles';
import { Row } from '@/components/shared/Styles';
import { VideoOrganizer, findByTheme } from '@/dados'
import { useState } from 'react';
import Stage from '@/components/shared/Stage';
import Pagination from '@/components/Home/Middle/Pagination';

export default function Middle() {

  const [list, setList] = useState(findByTheme())

  return (
    <Row>
      <ContainerMiddle>
        <ToolBar>
          <ListFilter>
            {findByTheme.themes
              .map( (theme, index) => (
                <li key={index}>
                  <Filter id={'theme' + index} name='theme' onClick={() => setList(findByTheme(theme))} >{theme}</Filter>
                </li>
              ))}
          </ListFilter>
          <Stage input={[list, setList]} organizers={VideoOrganizer} />
        </ToolBar>
        <Pagination list={list} sizePage={9} />
      </ContainerMiddle>
    </Row>
  )
}
