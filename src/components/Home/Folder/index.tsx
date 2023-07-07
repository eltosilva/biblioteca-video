import { FolderDescription, FolderLink, FolderMessage, StyleFolder } from './styles';

export default function Folder(){
  return (
    <StyleFolder>
      <FolderLink>
          <a href="#">WEBINAR EXCLUSIVOS</a>
        </FolderLink>
        <FolderMessage>
          <span>Menos Conversinha,</span>
          <span>
            Mais Conversão
            <img src="/img/asset-header.png" alt="" />
          </span>
        </FolderMessage>
        <hr />
        <FolderDescription>Conheça as estratégias que mudaram o jogo e como aplicá-las no seu negócio</FolderDescription>
    </StyleFolder>
  )
}