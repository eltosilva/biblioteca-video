import GlobalStyles from '@/components/globalstyles'

import StyledComponentsRegistry from '@/lib/registry'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
