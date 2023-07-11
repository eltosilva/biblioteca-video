import GlobalStyles from '@/components/globalstyles'

import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

import { IProps } from '@/types/props'
import { jakarta } from '@/fontes'

export const metadata = {
  title: 'Biblioteca de Vídeos',
  description: 'Biblioteca de vídeos de marketing',
  charset: 'utf-8'
}




export default function RootLayout({ children }: IProps) {
  return (
    <html lang="pt-br" className={jakarta.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <Main>
            {children}
          </Main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
