import { IVideo } from '@/types/props';
import { CardImage, CardTitle, Container, PlayerImage } from './styled';
import { ReactPropTypes } from 'react';

export default function Card({ value }: { value: IVideo }) {

  return (
    <Container>
      <CardImage>
        <img src={value.image} alt="" />
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

function Modal(props : ReactPropTypes) {
  
  return (
    <div style={{ backgroundColor: 'red', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
      
    </div>
  )
}
