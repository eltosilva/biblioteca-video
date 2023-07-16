import { Bottom, Description, H3, IFrame, Title } from './styles';

interface IPropsPlayer {
  value: IValuePlayer
}

interface IValuePlayer {
  title: string,
  url: string,
  description: string
}

export default function Player({ value }: IPropsPlayer) {
  return (
    <>
      <Title>{value.title}</Title>
      <IFrame
        src={value.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></IFrame>
      <Bottom>  
        <H3>Descrição</H3>
        <Description>
          {value.description}
        </Description>
        <H3>Downloads</H3>
      </Bottom>
    </>
  )
}