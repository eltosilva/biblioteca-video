import Footer from '@/components/footer'
import GlobalStyles from '@/components/globalstyles'
import Header from '@/components/header'
import StyledComponentsRegistry from '@/lib/registry'
import { IProps } from '@/types/props'

export const metadata = {
  title: 'Biblioteca de Vídeos',
  description: 'Biblioteca de vídeos de marketing',
  charset: 'utf-8'
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
