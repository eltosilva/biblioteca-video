import Link from 'next/link'
import { Facebook, Instagran, Linkedin } from '../shared/Links'
import { Row } from '../shared/Styles'
import { Column, Contacts, ContainerBottom, ContainerTop, SocialNetwork, StyleFooter } from './styles'

export default () => {
  return (
    <StyleFooter>
      <Row>
        <ContainerTop>
          <img src="/img/logo.png" alt="" />
          <p>Transformando visitantes em clientes.</p>
        </ContainerTop>
        <ContainerBottom>
          <Column>
            <h3>Links Principais</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/ferramenta">Ferramenta</Link>
              </li>
              <li>
                <a href="#">Preços</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h3>Cases</h3>
            <ul>
              <li>
                <a href="#">Geração de Leads B2B</a>
              </li>
              <li>
                <a href="#">Geração de Leads em Software</a>
              </li>
              <li>
                <a href="#">Geração de Leads em Imobiliária</a>
              </li>
              <li>
                <a href="#">Cases de Sucesso</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h3>Materiais</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Parcerias com Agências</a>
              </li>
              <li>
                <a href="#">Guia Definitivo do Marketing</a>
              </li>
              <li>
                <a href="#">Materiais Gratuitos</a>
              </li>
            </ul>
          </Column>
          <Column>
            <h3>Siga a Leadster</h3>
            <SocialNetwork>
              <Linkedin />
              <Facebook />
              <Instagran />
            </SocialNetwork>
            <Contacts>
              <p>
                <strong>E-mail:</strong> <a href="mailto:contato@leadster.com.br">contato@leadster.com.br</a>
              </p>
              <p>
                <strong>Telefone: </strong> (42) 98828-9851
              </p>
            </Contacts>
          </Column>
        </ContainerBottom>
      </Row>

      <Row>
        <ContainerBottom>
          <p>Copyright 2015 - 2022 Todos os direitos reservados | <strong>Leadster</strong></p>
          <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
        </ContainerBottom>
      </Row>
    </StyleFooter>
  )
}