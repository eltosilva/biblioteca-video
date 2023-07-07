import localFont from 'next/font/local'

import GlobalStyles from '@/components/globalstyles'

import StyledComponentsRegistry from '@/lib/registry'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { IProps } from '@/types/props'
import Main from '@/components/Main'

export const metadata = {
  title: 'Biblioteca de Vídeos',
  description: 'Biblioteca de vídeos de marketing',
  charset: 'utf-8'
}

const jakarta = localFont({
  src: [
    {
      path: '../../public/fontes/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fontes/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal'
    }
  ],
  display: 'swap'
})


export default function RootLayout({ children }: IProps) {
  return (
    <html lang="pt-br" className={jakarta.className}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <Main> {children}</Main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
