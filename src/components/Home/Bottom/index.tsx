import { PurpleSection } from '../styles';
import { BoxRight, ChatButton, Container } from './styles';

export default function LastCall() {
  return (
    <PurpleSection>
      <Container>
        <div>
          <img src="/img/comparativo_img_CTA.png" />
        </div>
        <BoxRight>
          <h2>Pronto para triplicar sua <br /> <strong>Geração de Leads?</strong> </h2>
          <h3>Criação e ativação em <strong>4 minutos</strong>.</h3>
          <hr />
          <div>
            <ChatButton>VER DEMOSTRAÇÂO</ChatButton>
            <img src="/img/selo_RD.png" alt="" />
          </div>
          <p>Não é necessário Cartão de Crédito | <img src="/img/rating.webp" alt="" /> 4.9/5 média de satisfação</p>
        </BoxRight>
      </Container>
    </PurpleSection>
  )
}