'use client'

import { SetStateAction, createContext, JSX, useState } from 'react';
import Bottom from './Bottom';
import Middle from './Middle';
import Top from './Top';

export const ContextHome = createContext((e: SetStateAction<JSX.Element>) => {})

export default function HomeMain() {

  const [modal, setModal] = useState(<></>)
  
  return (
    <ContextHome.Provider value={setModal}>
      {modal}
      <Top />
      <Middle />
      <Bottom />
    </ContextHome.Provider>

  )
}