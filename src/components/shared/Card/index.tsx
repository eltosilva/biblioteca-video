import { IVideo } from '@/types/props';
import { CardImage, CardTitle, Container, PlayerImage } from './styled';

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
/**
 * <path d="M498.52,104.97c-2.43-13.98-13.65-24.75-27.72-26.6c-142.56-19.11-287.04-19.11-429.6,0
    c-14.07,1.83-25.31,12.6-27.73,26.58c-17.95,99.89-17.95,202.18,0,302.07c2.43,13.99,13.66,24.76,27.73,26.6
    c71.21,9.55,142.99,14.34,214.83,14.34c71.84,0,143.6-4.79,214.8-14.34c14.07-1.83,25.31-12.61,27.72-26.6
    C516.49,307.14,516.48,204.85,498.52,104.97z M170.72,320.41v-128.8c0.6-12.24,11.02-21.66,23.25-21.06
    c3.31,0.17,6.55,1.07,9.47,2.66l126.26,64.39c10.16,4.87,14.45,17.06,9.58,27.22c-2.01,4.2-5.38,7.58-9.58,9.59L203.44,338.8
    c-10.77,5.83-24.23,1.83-30.07-8.95C171.79,326.95,170.89,323.72,170.72,320.41z"/>
*/