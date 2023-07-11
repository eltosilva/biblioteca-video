import Link from 'next/link';
import { PurpleSection } from '../styles';
import { Container, LinkWebinar, Title } from './styles';

export default function Folder() {
  return (
    <PurpleSection>
      <Container>
        <Link href="#">WEBINAR EXCLUSIVOS</Link>
        <Title><img src="/img/asset-header.png" alt="" /><span>Menos Conversinha,</span> <strong>Mais Conversão</strong></Title>
        <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
      </Container>
    </PurpleSection>
  )
}