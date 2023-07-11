import Link from 'next/link';
import { PurpleRow } from '../styles';
import { ContainerTop, Title } from './styles';

export default function Folder() {
  return (
    <PurpleRow>
      <ContainerTop>
        <Link href="/webinar">WEBINAR EXCLUSIVOS</Link>
        <Title><img src="/img/asset-header.png" alt="" /><span>Menos Conversinha,</span> <strong>Mais Conversão</strong></Title>
        <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
      </ContainerTop>
    </PurpleRow>
  )
}