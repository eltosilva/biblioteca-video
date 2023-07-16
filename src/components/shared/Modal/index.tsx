'use client'

import { UIEvent, KeyboardEvent, JSX, MouseEvent, SetStateAction, Dispatch } from 'react';
import { ContainerModal, ContentModal, Exit } from './styles';
import { IProps } from '@/types/props';

export default function Modal({ children, width, height, setThis }: IPropsModal) {

  function fnFechar(event: UIEvent<HTMLElement>) {
    event.stopPropagation()
    setThis(<></>)
  }

  return (
    <ContainerModal onClick={fnFechar}>
      <ContentModal
        $width={width}
        $height={height}
        onClick={(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => event.stopPropagation()}
        onKeyDownCapture={(e: KeyboardEvent<HTMLDivElement>) => e.key == 'Escape' && fnFechar(e)}
        tabIndex={0}
      >
          <Exit $marginLeft={width} onClick={fnFechar}>x</Exit>
        {children}
      </ContentModal>
    </ContainerModal >
  )
}

interface IPropsModal extends IProps {
  width: string,
  height: string,
  setThis: Dispatch<SetStateAction<JSX.Element>>
}