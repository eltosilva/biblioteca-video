'use client'

import { CardImage, CardTitle, Container, PlayerImage } from './styled';
import { ContextHome } from '@/components/Home';
import { useContext } from 'react';
import Modal from '../../../../shared/Modal';
import Player from '../Player';
import { IVideo } from '@/dados';

interface IPropsCard {
  value: IVideo
}

export default function Card({ value }: IPropsCard) {

  const setModal = useContext(ContextHome)
  return (
    <Container onClick={() => setModal(<Modal width="520px" height="700px" setThis={setModal}><Player value={value} /></Modal>)}>
      <CardImage>
        <img src={value.srcImage} alt="" />
        <PlayerImage>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" >
            <g fill='#ffffff'>
              <path d='M30,15 l40,25 l-40,25 z' />
            </g>
          </svg>
        </PlayerImage>
      </CardImage>
      <CardTitle>
        <h3>{value.title}</h3>
      </CardTitle>
    </Container>
  )
}
